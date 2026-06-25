import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  const loc = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [loc.pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-ink text-foreground">
      <Nav />
      <main id="main" className="flex-1 pt-16 md:pt-20 page-fade">{children}</main>
      <Footer />
    </div>
  );
}