import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="container-tight py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img src={logo} alt="CodersDive" className="h-9 w-auto mb-6" width={140} height={36} />
            <p className="text-muted-foreground max-w-md leading-relaxed mb-8">
              Elite product engineering studio for ambitious operators. We design, build and ship category-defining software.
            </p>
            <Link to="/contact" className="btn-primary group">
              Start a project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Studio</h4>
              <ul className="space-y-3">
                {[["Work", "/portfolio"], ["Services", "/services"], ["Process", "/process"], ["About", "/about"]].map(([n, p]) => (
                  <li key={n}><Link to={p} className="text-sm text-foreground/80 hover:text-primary transition-colors">{n}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Resources</h4>
              <ul className="space-y-3">
                {[["Journal", "/blog"], ["Testimonials", "/testimonials"], ["Contact", "/contact"]].map(([n, p]) => (
                  <li key={n}><Link to={p} className="text-sm text-foreground/80 hover:text-primary transition-colors">{n}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Connect</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-2"><Linkedin className="w-3.5 h-3.5" /> LinkedIn</a></li>
                <li><a href="#" className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-2"><Github className="w-3.5 h-3.5" /> GitHub</a></li>
                <li><a href="#" className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-2"><Instagram className="w-3.5 h-3.5" /> Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} CodersDive. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
