import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_GROUPS, COMPANY_NAV } from "@/content/navigation";

export default function Footer() {
  return (
    <footer className="bg-ink text-foreground border-t border-foreground/10">
      <div className="container-cd py-20 md:py-28">
        <div className="grid grid-cols-12 gap-10 mb-20">
          <div className="col-span-12 lg:col-span-7">
            <p className="mono text-foreground/45 mb-6">/ Final note</p>
            <h2 className="display-1">Bring us<br/>the messy version.</h2>
            <p className="mt-6 text-lg text-foreground/65 max-w-xl">You do not need a polished specification. Tell us what is slow, broken, unclear, or strategically important. We will help turn it into a sensible next step.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/start-a-project" className="btn btn-primary">Start a project <ArrowUpRight className="w-4 h-4" /></Link>
              <a href="https://cal.com/tayyabirfan/15min" className="btn btn-ghost">Book a discovery call</a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pl-10 lg:border-l border-foreground/10">
            <p className="mono text-foreground/45 mb-3">/ Newsletter</p>
            <p className="text-foreground/75 mb-4">Useful thinking for teams building software. One short note, occasionally.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
              <label className="sr-only" htmlFor="nl-email">Email</label>
              <input id="nl-email" type="email" required placeholder="you@company.com" className="flex-1 bg-transparent border border-foreground/15 rounded-full px-4 h-11 text-sm focus:border-aqua outline-none" />
              <button type="submit" className="btn btn-primary h-11 px-5">Subscribe</button>
            </form>
            <p className="text-xs text-foreground/45 mt-3">We will not spam. Unsubscribe any time.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pt-10 border-t border-foreground/10">
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-aqua inline-block" aria-hidden /> CodersDive</Link>
            <p className="mt-4 text-sm text-foreground/55 max-w-xs">Engineering software that compounds revenue.</p>
            <p className="mt-4 text-sm text-foreground/55"><a href="mailto:hello@codersdive.com" className="hover:text-aqua">hello@codersdive.com</a></p>
          </div>
          <div>
            <p className="mono text-foreground/45 mb-3">Services</p>
            <ul className="space-y-2 text-sm">
              {SERVICES_GROUPS.slice(0, 2).flatMap((g) => g.links.slice(0, 3)).map((l) => (
                <li key={l.href}><Link to={l.href} className="text-foreground/75 hover:text-aqua">{l.label}</Link></li>
              ))}
              <li><Link to="/services" className="text-foreground/55 hover:text-aqua">All services →</Link></li>
            </ul>
          </div>
          <div>
            <p className="mono text-foreground/45 mb-3">Company</p>
            <ul className="space-y-2 text-sm">
              {COMPANY_NAV.slice(0, 6).map((l) => <li key={l.href}><Link to={l.href} className="text-foreground/75 hover:text-aqua">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="mono text-foreground/45 mb-3">Resources</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/work" className="text-foreground/75 hover:text-aqua">Work</Link></li>
              <li><Link to="/industries" className="text-foreground/75 hover:text-aqua">Industries</Link></li>
              <li><Link to="/insights" className="text-foreground/75 hover:text-aqua">Insights</Link></li>
              <li><Link to="/faq" className="text-foreground/75 hover:text-aqua">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="mono text-foreground/45 mb-3">Legal</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-foreground/75 hover:text-aqua">Privacy</Link></li>
              <li><Link to="/terms" className="text-foreground/75 hover:text-aqua">Terms</Link></li>
              <li><Link to="/cookies" className="text-foreground/75 hover:text-aqua">Cookies</Link></li>
              <li><Link to="/accessibility" className="text-foreground/75 hover:text-aqua">Accessibility</Link></li>
              <li><Link to="/security-responsible-ai" className="text-foreground/75 hover:text-aqua">Security & Responsible AI</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-foreground/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-foreground/45">
          <p>© {new Date().getFullYear()} CodersDive. All rights reserved.</p>
          <p>Built with care. Your code. Your IP.</p>
        </div>
      </div>
    </footer>
  );
}