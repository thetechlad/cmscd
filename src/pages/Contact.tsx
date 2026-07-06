import Layout from "@/components/Layout";
import Contact from "@/components/Contact";

const ContactPage = () => (
  <Layout title="Contact" description="Tell us about your project. Most clients hear back within 4 hours." path="/contact">
    <Contact asPage />
  </Layout>
);

export default ContactPage;
