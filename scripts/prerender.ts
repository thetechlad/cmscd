// Runs after `vite build` (postbuild hook). Snapshots every public route to
// static HTML using the already-built client bundle in dist/, so crawlers
// and bots that don't execute JavaScript (Bingbot, social/link unfurlers,
// GPTBot/ClaudeBot/PerplexityBot, most SEO audit tools) get real content —
// the same markup a browser would render — on the very first response.
//
// This does not change what real visitors see: dist/'s JS bundle is
// untouched and still loads and remounts the app on top of each snapshot.
import { chromium, type Browser } from "playwright-core";
import { preview } from "vite";
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { loadSiteData } from "./loadSiteData";
import { buildRoutes } from "./routes";

// This script runs standalone (not through Vite), so .env isn't loaded
// automatically the way it is for `vite build`. Without this, VITE_STRAPI_URL
// falls back to localhost below and every cross-origin request to the real
// CMS gets silently blocked by the page.route filter further down.
try {
  process.loadEnvFile();
} catch {
  /* no .env file present — rely on already-exported env vars */
}

const PORT = 4544;
const STAGING_DIR = resolve(".prerender-src");

function findChrome(): string {
  const candidates = [
    process.env.PLAYWRIGHT_CHROMIUM_PATH,
    process.env.PUPPETEER_EXECUTABLE_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", // macOS
    "/usr/bin/google-chrome-stable", // Linux
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
  ].filter(Boolean) as string[];

  const found = candidates.find((p) => existsSync(p));
  if (!found) {
    throw new Error(
      "prerender: no Chrome/Chromium executable found. Install Google Chrome, or set " +
        "PLAYWRIGHT_CHROMIUM_PATH (or PUPPETEER_EXECUTABLE_PATH) to a Chromium binary. " +
        "On a CI/deploy image without a browser preinstalled, run " +
        "`npx playwright install --with-deps chromium` before this step and point " +
        "PLAYWRIGHT_CHROMIUM_PATH at the installed binary.",
    );
  }
  return found;
}

function outputPathFor(routePath: string): string {
  const clean = routePath.split("?")[0];
  return clean === "/" ? resolve("dist/index.html") : resolve(`dist${clean}/index.html`);
}

async function main() {
  const data = await loadSiteData();
  const { prerenderRoutes } = buildRoutes(data);

  // Serve an immutable copy of the build output, not dist/ itself. We write
  // each route's snapshot straight into dist/ as we crawl, and dist/index.html
  // is the very first file written — if the preview server served dist/ live,
  // its SPA history-fallback would start handing out that already-mutated
  // index.html (Cal.com embed script baked in from the homepage's render) as
  // the initial shell for every route crawled afterward. React still
  // re-renders <body> correctly on top of it (createRoot discards whatever
  // was there), but stray head tags like that script are never cleaned up,
  // so they'd ship on every single page.
  rmSync(STAGING_DIR, { recursive: true, force: true });
  cpSync(resolve("dist"), STAGING_DIR, { recursive: true });

  const server = await preview({
    root: process.cwd(),
    build: { outDir: ".prerender-src" },
    preview: { port: PORT, host: "127.0.0.1" },
  });
  const baseUrl = (server.resolvedUrls?.local[0] ?? `http://127.0.0.1:${PORT}/`).replace(/\/$/, "");

  let browser: Browser;
  try {
    browser = await chromium.launch({ executablePath: findChrome(), headless: true });
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  }
  const results: { path: string; ok: boolean; h1: string | null; words: number }[] = [];

  for (const route of prerenderRoutes) {
    // A fresh page (and browser context) per route — not one page reused across
    // all 124 navigations. Third-party embeds (the Cal.com booking widget) mutate
    // document.head and register custom elements as a side effect of mounting;
    // reusing a single page let those mutations leak into every later route's
    // snapshot, then double-fire and throw when a real browser re-ran them on
    // top of the already-polluted markup. A fresh context per route guarantees
    // each snapshot reflects only that route's own render.
    const context = await browser.newContext();
    const page = await context.newPage();

    // Third-party requests (analytics, the Cal.com embed script) aren't needed
    // for a content snapshot and would otherwise run during the capture. The
    // Strapi CMS API is the one cross-origin exception — the app genuinely
    // needs it to render any content at all now that pages fetch from it.
    const strapiOrigin = new URL(process.env.VITE_STRAPI_URL || "http://localhost:1337").origin;
    await page.route("**/*", (route) => {
      const reqUrl = new URL(route.request().url());
      if (reqUrl.origin === new URL(baseUrl).origin) return route.continue();
      if (reqUrl.origin === strapiOrigin) return route.continue();
      return route.abort();
    });

    const url = `${baseUrl}${route.path}`;
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForSelector("h1", { timeout: 15000 }).catch(() => null);

    // Some components (the Cal.com booking embed) add a <script src> to
    // document.head themselves as a side effect of mounting, rather than it
    // being part of the static template. Baking that into the snapshot means
    // a real browser loads it once via HTML parsing, then the same component
    // loads it again at runtime when it mounts for real — two copies of the
    // same third-party script running in one page, which is exactly what
    // caused "cal-modal-box has already been used with this registry". The
    // client bundle re-adds these correctly on its own; the snapshot doesn't
    // need to carry them.
    await page.evaluate((ownOrigin) => {
      document.querySelectorAll("script[src]").forEach((el) => {
        const src = el.getAttribute("src") || "";
        try {
          if (new URL(src, location.href).origin !== ownOrigin) el.remove();
        } catch {
          /* relative/unparsable src — leave it */
        }
      });
    }, new URL(baseUrl).origin);

    const html = await page.content();
    const h1 = await page.locator("h1").first().textContent().catch(() => null);
    const bodyText = await page.locator("body").innerText().catch(() => "");
    const words = bodyText.trim().split(/\s+/).filter(Boolean).length;

    await context.close();

    const outPath = outputPathFor(route.path);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html);

    const ok = Boolean(h1 && h1.trim().length > 0) && words > 30;
    results.push({ path: route.path, ok, h1, words });
    console.log(`${ok ? "✓" : "✗"} ${route.path}  (h1: ${h1 ? "yes" : "MISSING"}, ${words} words)`);
  }

  await browser.close();
  rmSync(STAGING_DIR, { recursive: true, force: true });

  const failed = results.filter((r) => !r.ok);
  console.log(`\nPrerendered ${results.length} routes, ${failed.length} failed.`);
  if (failed.length) {
    console.error("Routes missing an <h1> or with too little content:", failed.map((f) => f.path).join(", "));
    process.exitCode = 1;
    return;
  }
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
