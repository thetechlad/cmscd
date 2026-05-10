import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, ArrowRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#0A0A0A] text-white">
    <div className="container-tight py-20">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-4">
          <div className="display text-2xl font-bold mb-2">CodersDive</div>
          <p className="text-white/60 mb-6 leading-[1.7] max-w-sm">
            Engineering for the ambitious. We build software that defines your next chapter — premium engineering for founders and operators who demand the best.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[hsl(var(--accent-blue))] hover:text-[hsl(var(--accent-blue))] transition-colors">
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
          ["Careers", "/about"],
          ["Press", "/about"],
        ]} />

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.15em] text-white/50 mb-5 font-medium">Connect</div>
          <a href="mailto:hello@codersdive.com" className="block text-white hover:text-[hsl(var(--accent-blue))] mb-5 text-sm">hello@codersdive.com</a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[hsl(var(--accent-blue))] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-sm text-[#6B7280]">
        <p>© {new Date().getFullYear()} CodersDive. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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
