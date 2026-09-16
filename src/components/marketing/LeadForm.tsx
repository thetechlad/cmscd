import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";
import { createLead } from "@/lib/strapi";

const EMAIL = "codersdive@gmail.com";
const BUDGETS = ["Not sure yet", "< $1k/mo", "$1k – $3k/mo", "$3k – $7k/mo", "$7k+/mo"];

interface LeadFormProps {
  service: string;
  heading?: string;
}

const LeadForm = ({ service, heading = "Tell us what you need." }: LeadFormProps) => {
  const [data, setData] = useState({ name: "", email: "", company: "", budget: "Not sure yet", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const set = (patch: Partial<typeof data>) => setData((p) => ({ ...p, ...patch }));

  const inputCls =
    "w-full h-12 rounded-lg bg-background-soft border border-border px-4 text-foreground placeholder:text-muted-foreground/60 focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition";
  const labelCls = "block text-xs uppercase tracking-[0.1em] text-muted-foreground mb-2 font-medium";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!data.name.trim()) errs.name = "Please add your name.";
    if (!data.email.trim()) errs.email = "Please add an email so we can reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "That email doesn't look right.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);
    try {
      await createLead({
        formType: "marketing_lead",
        service,
        sourcePath: window.location.pathname,
        ...data,
      });
      track("form_submit", { form: "marketing_lead", service });
      setSent(true);
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

  if (sent) {
    return (
      <div className="card-light p-8 text-center">
        <h3 className="display text-xl font-bold mb-2">Thanks — that's in.</h3>
        <p className="text-muted-foreground">We typically reply within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="card-light p-8 space-y-5">
      <h3 className="display text-xl font-bold">{heading}</h3>
      <input type="hidden" name="service" value={service} />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls} htmlFor="lf-name">Your name</label>
          <input id="lf-name" value={data.name} onChange={(e) => set({ name: e.target.value })} aria-invalid={!!errors.name} className={inputCls} placeholder="Jane Doe" />
          {errors.name && <p className="text-xs text-destructive mt-1.5">{errors.name}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="lf-email">Email</label>
          <input id="lf-email" type="email" value={data.email} onChange={(e) => set({ email: e.target.value })} aria-invalid={!!errors.email} className={inputCls} placeholder="jane@company.com" />
          {errors.email && <p className="text-xs text-destructive mt-1.5">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor="lf-company">Company (optional)</label>
        <input id="lf-company" value={data.company} onChange={(e) => set({ company: e.target.value })} className={inputCls} placeholder="Acme Inc." />
      </div>
      <div>
        <label className={labelCls} htmlFor="lf-budget">Monthly budget range</label>
        <select id="lf-budget" value={data.budget} onChange={(e) => set({ budget: e.target.value })} className={inputCls}>
          {BUDGETS.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls} htmlFor="lf-message">What are you trying to do?</label>
        <textarea
          id="lf-message"
          rows={4}
          value={data.message}
          onChange={(e) => set({ message: e.target.value })}
          className="w-full rounded-lg bg-background-soft border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition resize-none"
          placeholder="A few sentences is plenty."
        />
      </div>
      <button type="submit" disabled={submitting} className="btn-primary btn-shine w-full h-12 disabled:opacity-70">
        {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <>Send inquiry <ArrowRight className="w-4 h-4" /></>}
      </button>
    </form>
  );
};

export default LeadForm;
