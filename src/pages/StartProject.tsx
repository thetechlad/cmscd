import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SeoHead from "@/components/site/SeoHead";

type Form = {
  context: string; stage: string; priorities: string; timeline: string; budget: string; links: string;
  name: string; email: string; company: string; consent: boolean;
};

const initial: Form = { context: "", stage: "", priorities: "", timeline: "", budget: "", links: "", name: "", email: "", company: "", consent: false };
const STAGES = ["Idea / not yet built", "Prototype / MVP in market", "Live product needing scale", "Modernisation / replatform", "Ongoing partnership"];
const TIMELINES = ["Exploring", "1–3 months", "3–6 months", "6+ months"];
const BUDGETS = ["Not sure yet", "Under $25k", "$25k–$75k", "$75k–$200k", "$200k+"];
const STEPS = ["Context", "Stage", "Priorities", "Timeline", "Budget", "Contact"] as const;

export default function StartProject() {
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("cd-intake");
      if (saved) setForm({ ...initial, ...JSON.parse(saved) });
    } catch {}
  }, []);
  useEffect(() => {
    try { sessionStorage.setItem("cd-intake", JSON.stringify(form)); } catch {}
  }, [form]);

  const set = (k: keyof Form, v: any) => setForm((f) => ({ ...f, [k]: v }));

  const validateStep = (i: number) => {
    const e: Record<string, string> = {};
    if (i === 0 && form.context.trim().length < 10) e.context = "Tell us a little more — at least a sentence.";
    if (i === 1 && !form.stage) e.stage = "Pick the closest stage.";
    if (i === 5) {
      if (!form.name.trim()) e.name = "Your name helps us reply properly.";
      if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
      if (!form.consent) e.consent = "We need permission to reply.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validateStep(step)) setStep((s) => Math.min(STEPS.length - 1, s + 1)); };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(5)) return;
    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, String(v)));
      fd.append("_subject", "CodersDive project enquiry");
      await fetch("https://formsubmit.co/ajax/hello@codersdive.com", { method: "POST", body: fd });
      sessionStorage.removeItem("cd-intake");
      nav("/thank-you");
    } catch {
      setErrors({ form: "Could not submit. Please email hello@codersdive.com." });
    } finally { setSubmitting(false); }
  };

  return (
    <>
      <SeoHead title="Start a project | CodersDive" description="Tell us what you are working on. We respond within one business day." path="/start-a-project" />
      <section className="container-cd pt-20 md:pt-28 pb-10">
        <p className="mono text-foreground/45">/ Start a project</p>
        <h1 className="display-1 mt-6 max-w-4xl">Tell us what is on your mind.</h1>
        <p className="mt-6 text-lg text-foreground/70 max-w-2xl">A few questions — answer what is useful, skip what is not. You can also use the <a href="#single" className="underline">single-page form</a>.</p>
      </section>

      <section className="container-cd pb-24">
        <ol className="flex flex-wrap items-center gap-3 mb-8 mono text-foreground/55" aria-label="Progress">
          {STEPS.map((s, i) => (
            <li key={s} className={`flex items-center gap-2 ${i === step ? "text-aqua" : ""}`}>
              <span className={`w-6 h-6 rounded-full grid place-items-center border ${i === step ? "border-aqua text-aqua" : "border-foreground/20"}`}>{i + 1}</span>{s}
            </li>
          ))}
        </ol>

        <form onSubmit={submit} className="card-cd p-7 md:p-10" noValidate>
          {step === 0 && (
            <div>
              <label className="block">
                <span className="font-serif text-2xl">What are you trying to do?</span>
                <textarea value={form.context} onChange={(e) => set("context", e.target.value)} rows={5} placeholder="A short description. Slow product, new MVP, broken modernisation — the messy version is fine." className="mt-4 w-full bg-graphite border border-foreground/15 rounded-lg p-4 focus:border-aqua outline-none" />
              </label>
              {errors.context && <p role="alert" className="text-destructive text-sm mt-2">{errors.context}</p>}
            </div>
          )}
          {step === 1 && (
            <fieldset>
              <legend className="font-serif text-2xl mb-4">Where is the work today?</legend>
              <div className="grid sm:grid-cols-2 gap-3">{STAGES.map((s) => (
                <label key={s} className={`flex gap-3 p-4 rounded-lg border cursor-pointer ${form.stage === s ? "border-aqua bg-aqua/5" : "border-foreground/15 hover:border-foreground/40"}`}>
                  <input type="radio" name="stage" value={s} checked={form.stage === s} onChange={() => set("stage", s)} className="mt-1 accent-aqua" />
                  <span>{s}</span>
                </label>
              ))}</div>
              {errors.stage && <p role="alert" className="text-destructive text-sm mt-2">{errors.stage}</p>}
            </fieldset>
          )}
          {step === 2 && (
            <label className="block"><span className="font-serif text-2xl">What matters most?</span>
              <textarea value={form.priorities} onChange={(e) => set("priorities", e.target.value)} rows={4} placeholder="Speed to launch, retention, security, modernisation, AI…" className="mt-4 w-full bg-graphite border border-foreground/15 rounded-lg p-4 focus:border-aqua outline-none" />
            </label>
          )}
          {step === 3 && (
            <fieldset><legend className="font-serif text-2xl mb-4">Timeline?</legend><div className="grid sm:grid-cols-2 gap-3">{TIMELINES.map((t) => (
              <label key={t} className={`flex gap-3 p-4 rounded-lg border cursor-pointer ${form.timeline === t ? "border-aqua bg-aqua/5" : "border-foreground/15 hover:border-foreground/40"}`}>
                <input type="radio" name="tl" value={t} checked={form.timeline === t} onChange={() => set("timeline", t)} className="mt-1 accent-aqua" /><span>{t}</span>
              </label>
            ))}</div></fieldset>
          )}
          {step === 4 && (
            <fieldset><legend className="font-serif text-2xl mb-4">Budget range?</legend><div className="grid sm:grid-cols-2 gap-3">{BUDGETS.map((b) => (
              <label key={b} className={`flex gap-3 p-4 rounded-lg border cursor-pointer ${form.budget === b ? "border-aqua bg-aqua/5" : "border-foreground/15 hover:border-foreground/40"}`}>
                <input type="radio" name="bg" value={b} checked={form.budget === b} onChange={() => set("budget", b)} className="mt-1 accent-aqua" /><span>{b}</span>
              </label>
            ))}</div>
            <label className="block mt-6"><span className="mono text-foreground/55">Existing links (optional)</span>
              <input value={form.links} onChange={(e) => set("links", e.target.value)} className="mt-2 w-full bg-graphite border border-foreground/15 rounded-lg px-4 h-11 focus:border-aqua outline-none" placeholder="Site, repo, deck — anything that helps" />
            </label></fieldset>
          )}
          {step === 5 && (
            <div className="space-y-5">
              <p className="font-serif text-2xl">Where do we reach you?</p>
              <label className="block"><span className="mono text-foreground/55">Name</span><input value={form.name} onChange={(e) => set("name", e.target.value)} className="mt-2 w-full bg-graphite border border-foreground/15 rounded-lg px-4 h-11 focus:border-aqua outline-none" />{errors.name && <p role="alert" className="text-destructive text-sm mt-1">{errors.name}</p>}</label>
              <label className="block"><span className="mono text-foreground/55">Email</span><input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="mt-2 w-full bg-graphite border border-foreground/15 rounded-lg px-4 h-11 focus:border-aqua outline-none" />{errors.email && <p role="alert" className="text-destructive text-sm mt-1">{errors.email}</p>}</label>
              <label className="block"><span className="mono text-foreground/55">Company (optional)</span><input value={form.company} onChange={(e) => set("company", e.target.value)} className="mt-2 w-full bg-graphite border border-foreground/15 rounded-lg px-4 h-11 focus:border-aqua outline-none" /></label>
              <label className="flex gap-3"><input type="checkbox" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1 accent-aqua" /><span className="text-sm text-foreground/70">I agree CodersDive can reply to my enquiry. We will not share my details.</span></label>
              {errors.consent && <p role="alert" className="text-destructive text-sm">{errors.consent}</p>}
              {errors.form && <p role="alert" className="text-destructive text-sm">{errors.form}</p>}
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <button type="button" onClick={back} disabled={step === 0} className="btn btn-ghost disabled:opacity-40">Back</button>
            {step < STEPS.length - 1
              ? <button type="button" onClick={next} className="btn btn-primary">Next</button>
              : <button type="submit" disabled={submitting} className="btn btn-primary">{submitting ? "Sending…" : "Send enquiry"}</button>}
          </div>
        </form>

        <details id="single" className="mt-12 card-cd p-7"><summary className="font-serif text-xl cursor-pointer">Or use a single-page form</summary>
          <form className="mt-6 grid gap-4" onSubmit={submit}>
            <textarea required rows={4} placeholder="What are you trying to do?" value={form.context} onChange={(e) => set("context", e.target.value)} className="bg-graphite border border-foreground/15 rounded-lg p-4 focus:border-aqua outline-none" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input required type="text" placeholder="Name" value={form.name} onChange={(e) => set("name", e.target.value)} className="bg-graphite border border-foreground/15 rounded-lg px-4 h-11 focus:border-aqua outline-none" />
              <input required type="email" placeholder="Email" value={form.email} onChange={(e) => set("email", e.target.value)} className="bg-graphite border border-foreground/15 rounded-lg px-4 h-11 focus:border-aqua outline-none" />
            </div>
            <label className="flex gap-3 text-sm text-foreground/70"><input type="checkbox" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1 accent-aqua" /> I agree CodersDive can reply.</label>
            <button className="btn btn-primary self-start" disabled={submitting}>{submitting ? "Sending…" : "Send"}</button>
          </form>
        </details>
      </section>
    </>
  );
}