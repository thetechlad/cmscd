// Team profiles are intentionally placeholders — populate with verified profiles only.
export type TeamMember = { name: string; role: string; strengths: string[]; selected: string[]; line: string };
export const TEAM: TeamMember[] = [
  { name: "Team profile — pending publication", role: "Engineering Lead",
    strengths: ["Architecture", "AI-assisted delivery", "Pragmatic systems"],
    selected: ["TypeScript", "Postgres", "AWS", "Retrieval pipelines"],
    line: "Believes most software problems are clearer once you draw the workflow." },
  { name: "Team profile — pending publication", role: "Product Designer",
    strengths: ["Research", "Interaction design", "Design systems"],
    selected: ["Figma", "Prototyping", "Component systems"],
    line: "Starts from the user decision, not the screen." },
  { name: "Team profile — pending publication", role: "Product Lead",
    strengths: ["Discovery", "Scope shaping", "Outcome framing"],
    selected: ["Roadmapping", "Stakeholder partnership"],
    line: "Makes trade-offs visible early, not at launch." },
];