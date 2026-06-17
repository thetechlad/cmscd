import { useState } from "react";
import { ArrowRight, Check, Calendar, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CAL_URL = "https://cal.com/tayyabirfan/15min";
const EMAIL = "hello@codersdive.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", company: "", message: "", timeline: "ASAP" });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New project inquiry from ${data.name}`,
          _template: "table",
          ...data,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      toast({ title: "Message sent", description: "We'll be in touch within 4 hours." });
      setData({ name: "", email: "", company: "", message: "", timeline: "ASAP" });
    } catch {
      toast({
        title: "Couldn't send right now",
        description: `Email us directly at ${EMAIL} and we'll reply fast.`,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const inputCls = "w-full h-12 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] px-4 text-white placeholder:text-white/40 focus:border-[hsl(var(--accent-blue))] focus:outline-none transition-colors";
  const labelCls = "block text-xs uppercase tracking-[0.1em] text-white/60 mb-2 font-medium";

  return (
    <section className="bg-[#0A0A0A] text-white section">
      <div className="container-tight">
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--accent-blue))] mb-5 font-medium">Let's Dive In</div>
          <h2 className="display text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.1] text-white mb-5">
            Your idea deserves more than <span style={{ color: "hsl(var(--accent-blue))" }}>average execution</span>.
          </h2>
          <p className="text-white/60 leading-[1.7] text-lg max-w-2xl">
            Tell us about your project. Most clients hear back within 4 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <form onSubmit={submit} className="lg:col-span-7 bg-[#1A1A1A] rounded-xl p-8 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelCls} htmlFor="name">Full Name</label>
                <input id="name" name="name" required value={data.name} onChange={onChange} className={inputCls} placeholder="Jane Doe" />
              </div>
              <div>
                <label className={labelCls} htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" required value={data.email} onChange={onChange} className={inputCls} placeholder="jane@company.com" />
              </div>
            </div>
            <div>
              <label className={labelCls} htmlFor="company">Company / Project Name</label>
              <input id="company" name="company" value={data.company} onChange={onChange} className={inputCls} placeholder="Acme Inc." />
            </div>
            <div>
              <label className={labelCls} htmlFor="message">What are you building?</label>
              <textarea id="message" name="message" rows={4} required value={data.message} onChange={onChange}
                className="w-full rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] px-4 py-3 text-white placeholder:text-white/40 focus:border-[hsl(var(--accent-blue))] focus:outline-none transition-colors resize-none"
                placeholder="A few sentences about your product, timeline and goals."
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="timeline">Timeline</label>
              <select id="timeline" name="timeline" value={data.timeline} onChange={onChange} className={inputCls}>
                <option>ASAP</option>
                <option>1–3 months</option>
                <option>3–6 months</option>
                <option>Just exploring</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full h-[52px] rounded-lg bg-white text-[#0A0A0A] font-semibold flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <>Let's Build Together <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>

          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-[0.1em] text-white/50 mb-3">Or schedule directly:</div>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-12 px-5 rounded-lg border border-white/40 text-white hover:bg-white hover:text-[#0A0A0A] hover:scale-[1.02] transition-all text-sm font-medium"
              >
                <Calendar className="w-4 h-4" />
                Schedule a 30-min call
              </a>
              <div className="mt-3 text-xs text-white/50">
                Or email <a href={`mailto:${EMAIL}`} className="text-white/80 hover:text-[hsl(var(--accent-blue))] underline-offset-2 hover:underline">{EMAIL}</a>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Response within 4 hours",
                "Free 30-minute strategy session",
                "No commitment required",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white/80">
                  <span className="w-6 h-6 rounded-full bg-[hsl(var(--accent-blue))]/15 border border-[hsl(var(--accent-blue))]/40 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[hsl(var(--accent-blue))]" />
                  </span>
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#2A2A2A] text-sm text-white/50">
              Remote-first · Karachi, PK · Serving clients globally
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
