import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, Mail, Calendar, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", company: "", message: "" });
  const { toast } = useToast();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message received", description: "We'll be in touch within one business day." });
    setData({ name: "", email: "", company: "", message: "" });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="glow-orb w-[500px] h-[500px] -top-40 right-0 bg-primary/20" />
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Take the plunge</div>
            <h2 className="display text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Let's dive into<br /><span className="text-gradient">your idea.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Tell us about your product. We'll reply within one business day with a clear next step — even if we're not the right fit.
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, label: "hello@codersdive.com", sub: "Email us anytime" },
                { icon: Calendar, label: "Book a 30-min call", sub: "Pick a slot, no forms" },
                { icon: MessageSquare, label: "WhatsApp us", sub: "Real humans, fast replies" },
              ].map((m) => (
                <a key={m.label} href="#" className="card-elev flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center">
                    <m.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{m.label}</div>
                    <div className="text-xs text-muted-foreground">{m.sub}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={submit} className="card-elev p-8 md:p-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={data.name} onChange={onChange} required placeholder="Jane Doe" className="bg-secondary/50 border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={data.email} onChange={onChange} required placeholder="jane@company.com" className="bg-secondary/50 border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" value={data.company} onChange={onChange} placeholder="Acme Inc." className="bg-secondary/50 border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">What are you building?</Label>
                <Textarea id="message" name="message" value={data.message} onChange={onChange} required rows={6} placeholder="A few sentences about the product, the timeline, and the metric you're trying to move." className="bg-secondary/50 border-border resize-none" />
              </div>
              <Button type="submit" className="btn-primary w-full md:w-auto">
                Send message
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <p className="text-xs text-muted-foreground">By submitting, you agree to our privacy policy. We never share your details.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
