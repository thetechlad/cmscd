import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, ArrowRight, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo-full.png";

const CAL_URL = "https://cal.com/tayyabirfan/15min";
const EMAIL = "codersdive@gmail.com";
const WHATSAPP_DISPLAY = "+1 (601) 907-5950";
const WHATSAPP_URL = "https://wa.me/16019075950";
const SOCIALS: { icon: any; href: string; label: string }[] = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/codersdive", label: "LinkedIn" },
  { icon: Twitter,  href: "https://x.com/codersdive",                     label: "X (Twitter)" },
  { icon: Github,   href: "https://github.com/codersdive",                label: "GitHub" },
];


const Footer = () => (
  <footer className="bg-background border-t border-border text-foreground">
    <div className="container-tight py-20">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-3">
          <Link to="/" className="inline-flex items-center mb-4">
            <img src={logo} alt="CodersDive" className="h-8 w-auto" />
          </Link>
          <p className="text-muted-foreground mb-6 leading-[1.7] max-w-sm">
            We build AI-powered software and automation that eliminates manual work in sales, operations, and support.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-[hsl(var(--accent-blue))] hover:text-accent-blue-ink hover:scale-110 hover:bg-background-soft transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Services" links={[
          ["AI & Automation", "/services/ai-and-automation"],
          ["Custom Software", "/services/custom-software-development"],
          ["Web Applications", "/services/web-application-development"],
          ["Mobile Apps", "/services/mobile-app-development"],
          ["UI/UX & Product Design", "/services/ui-ux-and-product-design"],
          ["Cloud & DevOps", "/services/cloud-and-devops"],
        ]} />
        <FooterCol title="Marketing" links={[
          ["Overview", "/marketing"],
          ["Social Media Management", "/marketing/social-media-management"],
          ["Content Writing", "/marketing/content-writing"],
          ["PPC", "/marketing/ppc"],
        ]} />
        <FooterCol title="Company" links={[
          ["About Us", "/about"],
          ["Our Work", "/portfolio"],
          ["How We Work", "/how-we-work"],
          ["Testimonials", "/testimonials"],
          ["Insights", "/insights"],
          ["Contact", "/contact"],
        ]} />

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-5 font-medium">Connect</div>
          <a href={`mailto:${EMAIL}`} className="block text-foreground hover:text-accent-blue-ink mb-2 text-sm transition-colors">{EMAIL}</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent-blue-ink mb-5 transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp {WHATSAPP_DISPLAY}
          </a>

          <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3 font-medium">Offices</div>
          <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-accent-blue-ink" />
              <span><span className="text-foreground font-medium">Wyoming, USA</span> — HQ</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-accent-blue-ink" />
              <span><span className="text-foreground font-medium">Karachi, PK</span> — Engineering</span>
            </li>
          </ul>

          <a
            href={CAL_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-blue"
          >
            Get a Free Automation Audit <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} CodersDive. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: [string, string][] }) => (
  <div className="lg:col-span-2">
    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-5 font-medium">{title}</div>
    <ul className="space-y-3">
      {links.map(([n, p]) => (
        <li key={n}>
          <Link to={p} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{n}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
