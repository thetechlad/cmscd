import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, ArrowRight, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo-full.png";
import { SERVICE_CATEGORIES, SOLUTIONS_ITEMS, RESOURCES_FILTERS, DIRECTORY_LINKS, type NavLink } from "@/data/nav";

const CAL_URL = "https://cal.com/tayyabirfan/15min";
const EMAIL = "codersdive@gmail.com";
const WHATSAPP_DISPLAY = "+1 (601) 907-5950";
const WHATSAPP_URL = "https://wa.me/16019075950";
const SOCIALS: { icon: any; href: string; label: string }[] = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/codersdive", label: "LinkedIn" },
  { icon: Twitter,  href: "https://x.com/codersdive",                     label: "X (Twitter)" },
  { icon: Github,   href: "https://github.com/codersdive",                label: "GitHub" },
];


const SERVICES_FOOTER_LINKS: NavLink[] = SERVICE_CATEGORIES.slice(0, 8).map((c) => ({ label: c.category, to: c.to }));
const SOLUTIONS_FOOTER_LINKS: NavLink[] = SOLUTIONS_ITEMS.slice(0, 8);

const Footer = () => (
  <footer className="bg-background border-t border-border text-foreground">
    {/* Sitemap directory tier */}
    <div className="container-tight pt-20 pb-14">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-4">
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

        <FooterCol title="Services" links={SERVICES_FOOTER_LINKS} viewAll={{ label: "View all services", to: "/services" }} />
        <FooterCol title="Solutions" links={SOLUTIONS_FOOTER_LINKS} viewAll={{ label: "View all solutions", to: "/solutions" }} />
        <FooterCol title="Company" links={[
          { label: "About Us", to: "/about" },
          { label: "Our Work", to: "/portfolio" },
          { label: "How We Work", to: "/how-we-work" },
          { label: "Testimonials", to: "/testimonials" },
          { label: "Contact", to: "/contact" },
        ]} />
        <FooterCol title="Resources" links={[{ label: "All Insights", to: "/insights" }, ...RESOURCES_FILTERS]}>
          <ul className="space-y-3 mt-5 pt-5 border-t border-border">
            {DIRECTORY_LINKS.map((d) => (
              <li key={d.to}>
                <Link to={d.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{d.label}</Link>
              </li>
            ))}
          </ul>
        </FooterCol>
      </div>
    </div>

    {/* Contact / offices tier */}
    <div className="border-t border-border">
      <div className="container-tight py-10 flex flex-wrap items-start justify-between gap-8">
        <div>
          <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3 font-medium">Connect</div>
          <a href={`mailto:${EMAIL}`} className="block text-foreground hover:text-accent-blue-ink mb-2 text-sm transition-colors">{EMAIL}</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent-blue-ink transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3 font-medium">Offices</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-accent-blue-ink" />
              <span><span className="text-foreground font-medium">Wyoming, USA</span> — HQ</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-accent-blue-ink" />
              <span><span className="text-foreground font-medium">Karachi, PK</span> — Engineering</span>
            </li>
          </ul>
        </div>

        <a href={CAL_URL} target="_blank" rel="noreferrer" className="btn-blue">
          Get a Free Automation Audit <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>

    <div className="container-tight">
      <div className="pt-8 pb-10 border-t border-border flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-sm text-muted-foreground">
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

const FooterCol = ({
  title,
  links,
  viewAll,
  children,
}: {
  title: string;
  links: NavLink[];
  viewAll?: { label: string; to: string };
  children?: ReactNode;
}) => (
  <div className="lg:col-span-2">
    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-5 font-medium">{title}</div>
    <ul className="space-y-3">
      {links.map((l) => (
        <li key={l.to}>
          <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</Link>
        </li>
      ))}
    </ul>
    {viewAll && (
      <Link to={viewAll.to} className="inline-block mt-4 text-sm font-medium text-accent-blue-ink hover:underline">
        {viewAll.label}
      </Link>
    )}
    {children}
  </div>
);

export default Footer;
