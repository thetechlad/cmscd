import { ReactNode, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  useEffect(() => {
    if (title) document.title = `${title} — CodersDive`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      meta?.setAttribute("content", description);
    }
  }, [title, description]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
