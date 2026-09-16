// One-command crawlability check: builds the site (which runs prebuild ->
// vite build -> postbuild/prerender via npm's script lifecycle), then reads
// each route's prerendered dist/**/index.html directly off disk — no
// JavaScript execution, exactly what a non-JS crawler sees — and fails
// loudly if the expected <h1> or a reasonable amount of body text is missing.
import { execSync } from "child_process";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { loadSiteData } from "./loadSiteData";
import { buildRoutes } from "./routes";

console.log("Building (prebuild -> vite build -> postbuild/prerender)...\n");
execSync("npm run build", { stdio: "inherit" });

function outputPathFor(routePath: string): string {
  const clean = routePath.split("?")[0];
  return clean === "/" ? resolve("dist/index.html") : resolve(`dist${clean}/index.html`);
}

const data = await loadSiteData();
const { prerenderRoutes } = buildRoutes(data);

console.log("\nChecking prerendered HTML per route (no JS executed):\n");

let failures = 0;
for (const route of prerenderRoutes) {
  const file = outputPathFor(route.path);

  if (!existsSync(file)) {
    console.error(`✗ ${route.path} — no prerendered file at ${file}`);
    failures++;
    continue;
  }

  const html = readFileSync(file, "utf-8");
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1Text = h1Match?.[1]?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const wordCount = bodyMatch
    ? bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length
    : 0;

  const ok = Boolean(h1Text) && wordCount > 30;
  console.log(`${ok ? "✓" : "✗"} ${route.path}  h1="${h1Text ?? "MISSING"}"  words=${wordCount}`);
  if (!ok) failures++;
}

const total = prerenderRoutes.length;
console.log(`\n${total - failures}/${total} routes pass.`);
if (failures > 0) {
  console.error(`${failures} route(s) failed the crawlability check.`);
  process.exit(1);
}
