import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, ArrowRight } from "lucide-react";

const CAL_URL = "https://cal.com/tayyabirfan/15min";
const EMAIL = "hello@codersdive.com";
const SOCIALS: { icon: any; href: string; label: string }[] = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/codersdive", label: "LinkedIn" },
  { icon: Twitter,  href: "https://x.com/codersdive",                     label: "X (Twitter)" },
  { icon: Github,   href: "https://github.com/codersdive",                label: "GitHub" },
];

const Footer = () => (
  <footer className="bg-[#0A0A0A] text-white">
    <div className="container-tight py-20">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-4">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group">
            <span className="relative w-9 h-9 rounded-lg bg-white text-[#0A0A0A] flex items-center justify-center text-[14px] font-bold overflow-hidden">
              <span className="relative z-10">C</span>
              <span className="absolute inset-0 bg-[hsl(var(--accent-blue))] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </span>
            <span className="display text-2xl font-bold">CodersDive</span>
          </Link>
          <p className="text-white/60 mb-6 leading-[1.7] max-w-sm">
            Engineering for the ambitious. We build software that defines your next chapter, with premium engineering for founders and operators who demand the best.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[hsl(var(--accent-blue))] hover:text-[hsl(var(--accent-blue))] hover:scale-110 hover:bg-white/5 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Services" links={[
          ["Full-Stack Dev", "/services"],
          ["AI & Automation", "/services"],
          ["Web3 & Blockchain", "/services"],
          ["UI/UX Design", "/services"],
          ["Mobile Dev", "/services"],
          ["Cloud & DevOps", "/services"],
        ]} />
        <FooterCol title="Company" links={[
          ["About Us", "/about"],
          ["Our Work", "/portfolio"],
          ["How We Work", "/process"],
          ["Testimonials", "/testimonials"],
          ["Insights", "/blog"],
          ["Contact", "/contact"],
        ]} />

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.15em] text-white/50 mb-5 font-medium">Connect</div>
          <a href={`mailto:${EMAIL}`} className="block text-white hover:text-[hsl(var(--accent-blue))] mb-5 text-sm transition-colors">{EMAIL}</a>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[hsl(var(--accent-blue))] text-white text-sm font-semibold hover:opacity-90 hover:scale-[1.03] transition-all"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-sm text-[#6B7280]">
        <p>© {new Date().getFullYear()} CodersDive. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: [string, string][] }) => (
  <div className="lg:col-span-2">
    <div className="text-xs uppercase tracking-[0.15em] text-white/50 mb-5 font-medium">{title}</div>
    <ul className="space-y-3">
      {links.map(([n, p]) => (
        <li key={n}>
          <Link to={p} className="text-sm text-white/80 hover:text-white transition-colors">{n}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
