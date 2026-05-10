import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout title="Page Not Found" description="The page you're looking for doesn't exist.">
      <section className="py-24 relative">
        <div className="absolute inset-0 hex-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-8xl font-bold text-glow-purple mb-8 font-space-grotesk">
              404
            </div>
            <h1 className="text-4xl font-bold mb-6 text-foreground">
              Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-solid">
                <Link to="/">
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-neon">
                <Link to="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
