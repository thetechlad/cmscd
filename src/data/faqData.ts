// Shared FAQ content for the homepage section and the /faq page.
export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  id: string;
  label: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: "services",
    label: "Services",
    items: [
      {
        q: "What kind of projects do you take on?",
        a: "We design and build web apps, SaaS products, AI features, mobile apps, e-commerce and internal tools — from a first MVP to scaling an existing product. If it's ambitious and software-shaped, it's in scope.",
      },
      {
        q: "Do you only build, or do you help with product and design too?",
        a: "Both. Product strategy, UX and UI design, and engineering are connected throughout delivery. We help shape scope and priorities, not just write code against a fixed spec.",
      },
      {
        q: "Can you work with our existing team or codebase?",
        a: "Yes. We can embed as a dedicated product team, augment your engineers, or take ownership of a defined workstream. We're comfortable joining an existing codebase and improving it as we go.",
      },
      {
        q: "Do you offer support after launch?",
        a: "Yes. Many clients continue with us for ongoing improvement, monitoring, new features and maintenance. We can scale involvement up or down as your needs change.",
      },
    ],
  },
  {
    id: "timelines",
    label: "Timelines",
    items: [
      {
        q: "How quickly can we start?",
        a: "Usually within one to two weeks. We begin with a short discovery to align on outcomes and scope, then move into design and delivery in visible increments.",
      },
      {
        q: "How long does a typical project take?",
        a: "A focused MVP often ships in 4–8 weeks. Larger platforms run in phased releases over a few months. We break work into increments so you see progress early and often, not just at the end.",
      },
      {
        q: "How do you keep projects on schedule?",
        a: "We work in short cycles with regular demos, expose risk early, and keep scope decisions explicit. That avoids the expensive surprises that usually derail timelines.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    items: [
      {
        q: "How do you price engagements?",
        a: "Two common models: fixed-scope for well-defined projects, and monthly for dedicated teams or ongoing product work. We recommend the model that fits your certainty and pace after discovery.",
      },
      {
        q: "What does a project typically cost?",
        a: "It depends on scope and complexity, but MVPs generally start in the low five figures and grow with ambition. After a short discovery call we give you a clear, itemised estimate — no vague ranges.",
      },
      {
        q: "Do you require a long contract?",
        a: "No long lock-ins. Fixed-scope work is milestone-based, and ongoing engagements are month to month. You stay because the work is worth it, not because of a contract.",
      },
      {
        q: "What do I get before committing?",
        a: "A free discovery call, a clear plan, and a transparent estimate. You'll know the outcome, scope and price before any commitment.",
      },
    ],
  },
];
