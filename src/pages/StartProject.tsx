import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/templates/Breadcrumbs";
import { useToast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";

const EMAIL = "codersdive@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;
const STORAGE_KEY = "cd_intake_draft";

interface FormState {
  context: string;
  stage: string;
  priorities: string[];
  timeline: string;
  budget: string;
  links: string;
  name: string;
  email: string;
  company: string;
}

const EMPTY: FormState = {
  context: "",
  stage: "",
  priorities: [],
  timeline: "",
  budget: "",
  links: "",
  name: "",
  email: "",
  company: "",
};

const STAGES = ["Idea / concept", "Early build / MVP", "Live product", "Scaling / modernizing"];
const PRIORITY_OPTIONS = [
  "AI & automation",
  "New product / MVP",
  "Web application",
  "Mobile application",
  "E-commerce",
  "Design / UX",
  "Cloud & DevOps",
  "Modernization",
  "QA & testing",
  "Dedicated team",
];
const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Just exploring"];
const BUDGETS = ["Not sure yet", "< $25k", "$25k – $75k", "$75k – $150k", "$150k+"];

const STEPS = ["Context", "Stage", "Priorities", "Scope", "Contact"];

const StartProject = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Restore draft
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) setData({ ...EMPTY, ...JSON.parse(raw) });
    } catch {
      /* ignore */
    }
  }, []);

  // Persist draft
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const set = (patch: Partial<FormState>) => setData((p) => ({ ...p, ...patch }));

  const togglePriority = (p: string) =>
    set({
      priorities: data.priorities.includes(p)
        ? data.priorities.filter((x) => x !== p)
        : [...data.priorities, p],
    });

  const validateContact = () => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = "Please add your name.";
    if (!data.email.trim()) e.email = "Please add an email so we can reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "That email doesn't look right.";
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => errorRef.current?.focus());
      return false;
    }
    return true;
  };

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContact()) return;
    setSubmitting(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New project intake from ${data.name}`,
          _template: "table",
          ...data,
          priorities: data.priorities.join(", "),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      sessionStorage.removeItem(STORAGE_KEY);
      track("form_submit", { form: "start_project", priorities: data.priorities.length });
      navigate("/thank-you");
    } catch {
      toast({
        title: "Couldn't send right now",
        description: `Email us directly at ${EMAIL} and we'll reply fast.`,
        variant: "destructive",
      });
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full h-12 rounded-lg bg-background-soft border border-border px-4 text-foreground placeholder:text-muted-foreground/60 focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition";
  const labelCls = "block text-xs uppercase tracking-[0.1em] text-muted-foreground mb-2 font-medium";

  return (
    <Layout
      title="Start a project | CodersDive"
      description="Tell us what you're building. A short, optional intake so we can prepare a useful first conversation."
      path="/start-a-project"
    >
      <section className="bg-mesh pt-[128px] pb-12 border-b border-border">
        <div className="container-tight">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Start a project" }]} />
          <div className="label-eyebrow mb-5">Start a project</div>
          <h1 className="display text-[32px] md:text-[48px] font-bold leading-[1.05] max-w-3xl mb-4">
            Bring us the messy version.
          </h1>
          <p className="text-muted-foreground max-w-2xl leading-[1.6] text-lg">
            A few optional questions help us prepare. Nothing here is mandatory except a way to
            reach you. We typically reply within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-tight grid lg:grid-cols-12 gap-12">
          {/* Progress */}
          <aside className="lg:col-span-3">
            <ol className="flex lg:flex-col gap-2 lg:gap-1 lg:sticky lg:top-28 overflow-x-auto">
              {STEPS.map((label, i) => {
                const state = i === step ? "current" : i < step ? "done" : "todo";
                return (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => i <= step && setStep(i)}
                      disabled={i > step}
                      className={`flex items-center gap-3 py-2.5 px-3 rounded-lg w-full text-left transition ${
                        state === "current"
                          ? "bg-accent-blue-soft text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      } ${i > step ? "opacity-50 cursor-default" : ""}`}
                    >
                      <span
                        className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold border ${
                          state === "done"
                            ? "bg-accent-blue text-white border-accent-blue"
                            : state === "current"
                            ? "border-accent-blue text-accent-blue"
                            : "border-border"
                        }`}
                      >
                        {state === "done" ? <Check className="w-3.5 h-3.5" /> : i + 1}
                      </span>
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </aside>

          {/* Form */}
          <div className="lg:col-span-9 max-w-2xl">
            <form onSubmit={submit} noValidate>
              {/* Step 0 — context */}
              {step === 0 && (
                <div className="space-y-5">
                  <h2 className="display text-2xl font-bold">What are you trying to do?</h2>
                  <div>
                    <label className={labelCls} htmlFor="context">
                      Tell us the problem, opportunity, or idea
                    </label>
                    <textarea
                      id="context"
                      rows={5}
                      value={data.context}
                      onChange={(e) => set({ context: e.target.value })}
                      className="w-full rounded-lg bg-background-soft border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/30 transition resize-none"
                      placeholder="A few sentences is plenty. What's slow, broken, unclear, or strategically important?"
                    />
                  </div>
                </div>
              )}

              {/* Step 1 — stage */}
              {step === 1 && (
                <div className="space-y-5">
                  <h2 className="display text-2xl font-bold">Where are you today?</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {STAGES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => set({ stage: s })}
                        aria-pressed={data.stage === s}
                        className={`text-left p-5 rounded-xl border transition ${
                          data.stage === s
                            ? "border-accent-blue bg-accent-blue-soft"
                            : "border-border bg-background-soft hover:border-accent-blue/40"
                        }`}
                      >
                        <span className="font-semibold">{s}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 — priorities */}
              {step === 2 && (
                <div className="space-y-5">
                  <h2 className="display text-2xl font-bold">What might we focus on?</h2>
                  <p className="text-sm text-muted-foreground">Select any that apply.</p>
                  <div className="flex flex-wrap gap-2.5">
                    {PRIORITY_OPTIONS.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => togglePriority(p)}
                        aria-pressed={data.priorities.includes(p)}
                        className={`px-4 py-2.5 rounded-full border text-sm font-medium transition ${
                          data.priorities.includes(p)
                            ? "border-accent-blue bg-accent-blue text-white"
                            : "border-border bg-background-soft hover:border-accent-blue/40"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 — scope */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="display text-2xl font-bold">Timeline, budget & context</h2>
                  <div>
                    <label className={labelCls} htmlFor="timeline">Timeline</label>
                    <select id="timeline" value={data.timeline} onChange={(e) => set({ timeline: e.target.value })} className={inputCls}>
                      <option value="">Select…</option>
                      {TIMELINES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="budget">Budget range (optional)</label>
                    <select id="budget" value={data.budget} onChange={(e) => set({ budget: e.target.value })} className={inputCls}>
                      <option value="">Select…</option>
                      {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="links">Existing links (optional)</label>
                    <input id="links" value={data.links} onChange={(e) => set({ links: e.target.value })} className={inputCls} placeholder="Website, repo, deck, Figma…" />
                  </div>
                </div>
              )}

              {/* Step 4 — contact */}
              {step === 4 && (
                <div className="space-y-5">
                  <h2 className="display text-2xl font-bold">How do we reach you?</h2>
                  {Object.keys(errors).length > 0 && (
                    <div
                      ref={errorRef}
                      tabIndex={-1}
                      role="alert"
                      className="rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive focus:outline-none"
                    >
                      Please fix the highlighted fields below.
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls} htmlFor="name">Your name</label>
                      <input id="name" value={data.name} onChange={(e) => set({ name: e.target.value })} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} className={inputCls} placeholder="Jane Doe" />
                      {errors.name && <p id="name-err" className="text-xs text-destructive mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="email">Email</label>
                      <input id="email" type="email" value={data.email} onChange={(e) => set({ email: e.target.value })} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} className={inputCls} placeholder="jane@company.com" />
                      {errors.email && <p id="email-err" className="text-xs text-destructive mt-1.5">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="company">Company (optional)</label>
                    <input id="company" value={data.company} onChange={(e) => set({ company: e.target.value })} className={inputCls} placeholder="Acme Inc." />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We use your details only to respond to this enquiry. No phone number required. See our{" "}
                    <a href="/privacy" className="text-accent-blue hover:underline">privacy notice</a>.
                  </p>
                </div>
              )}

              {/* Controls */}
              <div className="flex items-center justify-between gap-3 mt-10 pt-6 border-t border-border">
                {step > 0 ? (
                  <button type="button" onClick={back} className="btn-secondary h-11">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : (
                  <span />
                )}
                {step < STEPS.length - 1 ? (
                  <button type="button" onClick={next} className="btn-blue h-11">
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button type="submit" disabled={submitting} className="btn-primary btn-shine h-11 disabled:opacity-70">
                    {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <>Send project brief <ArrowRight className="w-4 h-4" /></>}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StartProject;
