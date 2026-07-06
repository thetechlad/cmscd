import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  /** Canonical route path for this page. */
  path?: string;
  /** Absolute Open Graph image URL. */
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Array<Record<string, unknown> | null | undefined>;
}

const Layout = ({
  children,
  title,
  description,
  path,
  image,
  type,
  noindex,
  jsonLd,
}: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {title && (
        <Seo
          title={title}
          description={description}
          path={path}
          image={image}
          type={type}
          noindex={noindex}
          jsonLd={jsonLd}
        />
      )}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
