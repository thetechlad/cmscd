import Layout from "@/components/Layout";
import Contact from "@/components/Contact";

const ContactPage = () => (
  <Layout title="Contact" description="Tell us about your product. We reply within one business day.">
    <section className="relative pt-12 pb-4">
      <div className="container-tight">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Contact</div>
        <h1 className="display text-5xl md:text-7xl font-semibold leading-[0.95] max-w-4xl">
          Let's build something <span className="text-gradient">worth shipping.</span>
        </h1>
      </div>
    </section>
    <Contact />
  </Layout>
);

export default ContactPage;
