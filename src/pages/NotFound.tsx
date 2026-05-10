import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout title="Page Not Found" description="The page you're looking for doesn't exist.">
      <section className="bg-background section pt-[160px]">
        <div className="container-tight text-center max-w-2xl mx-auto">
          <div className="display text-7xl md:text-8xl font-bold mb-6" style={{ color: "hsl(var(--accent-blue))" }}>
            404
          </div>
          <h1 className="display text-3xl md:text-4xl font-bold mb-5">Page not found</h1>
          <p className="text-muted-foreground leading-[1.7] mb-8">
            The page you're looking for doesn't exist. It might have moved, or the link is wrong.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">Go home</Link>
            <Link to="/contact" className="btn-secondary">Contact us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
