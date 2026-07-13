// Central registry for all client work / portfolio projects.
// Used by the homepage gallery, showreel, logo strip, portfolio page
// filters, and the per-project case study pages.

import shotSuuper from "@/assets/real-suuper.jpg";
import shotNook from "@/assets/real-nooktravel.jpg";
import shotGoodpath from "@/assets/real-goodpath.jpg";
import shotKidan from "@/assets/real-kidan.jpg";
import shotPlural from "@/assets/real-plural.jpg";
import shotSynko from "@/assets/real-synko.jpg";
import shotLaunch from "@/assets/real-launchmystore.jpg";
import shotOrganix from "@/assets/real-ogorganix.jpg";
import shotVinn from "@/assets/real-vinncorp.jpg";

import logoSuuper from "@/assets/logos/suuper.png";
import logoNook from "@/assets/logos/nooktravel.png";
import logoGoodpath from "@/assets/logos/goodpath.png";
import logoKidan from "@/assets/logos/kidan.png";
import logoPlural from "@/assets/logos/plural.png";
import logoSynko from "@/assets/logos/synko.png";
import logoLaunch from "@/assets/logos/launchmystore.png";
import logoOrganix from "@/assets/logos/ogorganix.png";
import logoVinn from "@/assets/logos/vinncorp.png";

export type ProjectCategory = "AI" | "SaaS" | "Design";

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  url: string;
  category: ProjectCategory;
  tag: string;
  /** One-line summary for cards */
  summary: string;
  shot: string;
  logo: string;
  /** Tile background (used behind screenshots / logos) */
  bg: string;
  /** true when the brand logo/site is dark and needs a dark tile */
  dark?: boolean;
  tech: string[];
  year: string;
  role: string;
  sector: string;
  /** Case study long-form content */
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  stats: ProjectStat[];
  features: string[];
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  AI: "AI",
  SaaS: "SaaS Products",
  Design: "Design",
};

export const projects: Project[] = [
  {
    slug: "suuper",
    name: "Suuper",
    url: "https://suuper.cc",
    category: "AI",
    tag: "AI Support SaaS",
    summary: "An AI reply engine that trains on a business and answers customers across web and WhatsApp in seconds.",
    shot: shotSuuper,
    logo: logoSuuper,
    bg: "#EEF2FF",
    tech: ["React", "TypeScript", "Node.js", "OpenAI", "WhatsApp API", "PostgreSQL"],
    year: "2024",
    role: "Product design & full-stack engineering",
    sector: "Customer Support · SaaS",
    overview:
      "Suuper lets any business add AI-powered replies to their website and WhatsApp in under a minute. Train it on your business, paste one snippet, and it starts answering customers instantly — no code, no setup calls.",
    challenge:
      "Small businesses lose sales while customers wait for answers. Existing chatbots demand long configuration, brittle decision trees and technical setup that owners simply don't have time for. The product needed to feel effortless: from sign-up to a live, trained assistant in seconds.",
    approach:
      "We designed a training flow that ingests a business's own content and turns it into a grounded knowledge base, then wrapped it in a one-line embeddable widget. Real-time streaming replies, a WhatsApp channel, and a clean dashboard were built on a typed React + Node stack with a retrieval pipeline over PostgreSQL.",
    outcome:
      "Businesses go live in under 60 seconds with average reply times around three seconds, answering product, delivery and support questions around the clock across web and WhatsApp.",
    stats: [
      { label: "Avg. reply time", value: "~3s" },
      { label: "Time to launch", value: "<60s" },
      { label: "Channels", value: "Web + WhatsApp" },
    ],
    features: [
      "One-snippet website widget with streaming replies",
      "Business-specific training on your own content",
      "WhatsApp channel with the same trained assistant",
      "Conversation dashboard and analytics",
      "No-code setup for non-technical owners",
    ],
  },
  {
    slug: "nooktravel",
    name: "NookTravel",
    url: "https://nooktravel.space",
    category: "AI",
    tag: "AI Travel Platform",
    summary: "An AI itinerary product that writes a full day-by-day plan — budget, stays, food and packing — in minutes.",
    shot: shotNook,
    logo: logoNook,
    bg: "#FEF2F2",
    tech: ["Next.js", "TypeScript", "OpenAI", "Stripe", "PostgreSQL", "Tailwind"],
    year: "2025",
    role: "Product design & full-stack engineering",
    sector: "Travel · Consumer AI",
    overview:
      "NookTravel replaces the 8-hour rabbit hole of tabs, forums and half-written notes with a complete, personalised day-by-day travel plan for any destination in the world — generated in under two minutes.",
    challenge:
      "Planning a trip is fragmented and overwhelming. Travellers juggle budgets, stay areas, food, transport and packing across dozens of sources. The product had to turn a short brief into a trustworthy, structured plan people would actually pay for.",
    approach:
      "We built a guided brief that captures destination, length and travel style, then an AI generation pipeline that assembles a structured, editable itinerary. A one-time paid unlock, sample previews and social proof were designed to build trust fast, all on a Next.js + Stripe stack.",
    outcome:
      "NookTravel has planned 12,000+ trips across 20+ countries, taking travellers from a blank brief to a full plan in under two minutes for a simple one-time price.",
    stats: [
      { label: "Trips planned", value: "12,000+" },
      { label: "Countries", value: "20+" },
      { label: "Brief to plan", value: "<2 min" },
    ],
    features: [
      "Guided trip brief with style and budget inputs",
      "AI-generated day-by-day itinerary",
      "Budget, stays, food, transport and packing",
      "One-time paid unlock via Stripe",
      "Sample previews and shareable plans",
    ],
  },
  {
    slug: "goodpath-ai",
    name: "GoodPath AI",
    url: "https://www.goodpathai.com",
    category: "AI",
    tag: "Healthcare AI",
    summary: "A care platform that matches patients with the right therapist using AI, for a confident start to mental health support.",
    shot: shotGoodpath,
    logo: logoGoodpath,
    bg: "#F1EDE6",
    tech: ["React", "TypeScript", "Node.js", "AI Matching", "PostgreSQL"],
    year: "2025",
    role: "Product design & front-end engineering",
    sector: "Healthcare · Mental Health",
    overview:
      "GoodPath AI connects patients with therapists chosen specifically for them, so people can begin their mental-health journey with confidence and the right support.",
    challenge:
      "Finding the right therapist is daunting and deeply personal. The experience had to feel calm, trustworthy and human while an intelligent matching layer did the heavy lifting behind the scenes.",
    approach:
      "We crafted a warm, reassuring brand and interface with a clear patient journey and a separate path for therapists to join. An AI matching flow pairs patients to clinicians based on needs and preferences, presented through a soft, accessible design system.",
    outcome:
      "A polished, trust-first platform with distinct patient and therapist journeys and an AI matching experience that makes starting care feel approachable.",
    stats: [
      { label: "Audiences", value: "Patients + Therapists" },
      { label: "Core", value: "AI matching" },
      { label: "Focus", value: "Trust-first UX" },
    ],
    features: [
      "AI-driven patient–therapist matching",
      "Separate onboarding for patients and therapists",
      "Calm, accessible healthcare design system",
      "Guided ‘Start your journey’ flow",
      "Reviews and process transparency",
    ],
  },
  {
    slug: "kidan",
    name: "Kidan",
    url: "https://kidan.co",
    category: "SaaS",
    tag: "Enterprise IT",
    summary: "A polished platform for a Swiss enterprise IT partner spanning security, strategy and scalable cloud technology.",
    shot: shotKidan,
    logo: logoKidan,
    bg: "#0B1220",
    dark: true,
    tech: ["Next.js", "TypeScript", "Headless CMS", "Cloud", "Security"],
    year: "2024",
    role: "Design & front-end engineering",
    sector: "Enterprise IT · Switzerland",
    overview:
      "Kidan is an end-to-end IT services and solutions partner for Swiss enterprises, combining security, strategy and technology that scales into a single confident brand presence.",
    challenge:
      "An enterprise audience expects credibility at first glance. Kidan needed a refined, high-trust surface that could present a broad services portfolio, partner logos and technologies without feeling cluttered.",
    approach:
      "We delivered a cinematic dark interface with disciplined typography, structured service and solution navigation, and a partner/technology showcase — engineered as a fast, maintainable front end backed by a headless content model.",
    outcome:
      "A premium, enterprise-grade marketing and services platform that positions Kidan as a serious long-term IT partner for leading Swiss organisations.",
    stats: [
      { label: "Professionals", value: "100+" },
      { label: "Market", value: "Switzerland" },
      { label: "Scope", value: "Security · Cloud" },
    ],
    features: [
      "Cinematic, high-trust enterprise design",
      "Structured services and solutions navigation",
      "Partner and technology showcases",
      "Fast, maintainable component architecture",
      "Headless content management",
    ],
  },
  {
    slug: "plural-dynamics",
    name: "Plural Dynamics",
    url: "https://pluraldynamics.com",
    category: "SaaS",
    tag: "Tech Consulting",
    summary: "A bold, cinematic brand and platform for a global technology consultancy delivering world-class software.",
    shot: shotPlural,
    logo: logoPlural,
    bg: "#1A1113",
    dark: true,
    tech: ["TypeScript", "React", "AWS", "GraphQL", "Node.js"],
    year: "2024",
    role: "Brand & platform engineering",
    sector: "Technology Consulting",
    overview:
      "Plural Dynamics is a global technology consultancy delivering world-class software through a refined, repeatable process. We built the brand and platform that carry that promise.",
    challenge:
      "A consultancy competing on craft needs a presence that signals it. Plural Dynamics needed to convey depth across products, services, expertise and industries while staying bold and memorable.",
    approach:
      "We created a dramatic visual identity and a modular platform to present offerings across multiple dimensions — products, services, expertise, technologies and industries — with strong motion and a clear path to consultation.",
    outcome:
      "A distinctive, confident platform that elevates Plural Dynamics against larger competitors and turns visitors into consultation requests.",
    stats: [
      { label: "Reach", value: "Global" },
      { label: "Offering", value: "Products + Services" },
      { label: "Style", value: "Cinematic" },
    ],
    features: [
      "Bold, cinematic brand identity",
      "Modular product and service showcases",
      "Expertise and industry sections",
      "Motion-led hero and interactions",
      "Consultation conversion flow",
    ],
  },
  {
    slug: "synko",
    name: "Synko",
    url: "https://synko.tech",
    category: "SaaS",
    tag: "POS & Commerce",
    summary: "Award-winning POS, digital ordering and business-management tech empowering thousands of businesses worldwide.",
    shot: shotSynko,
    logo: logoSynko,
    bg: "#F1F5F3",
    tech: ["React", "TypeScript", "Node.js", "Payments", "Cloud", "Hardware"],
    year: "2025",
    role: "Product design & web engineering",
    sector: "Retail & Hospitality · POS",
    overview:
      "Synko delivers award-winning point-of-sale, digital ordering and business-management technology that empowers thousands of businesses worldwide across retail and hospitality.",
    challenge:
      "A broad product suite spanning POS, digital ordering, payments and hardware needed a clear, credible home that could speak to multiple industries without overwhelming operators.",
    approach:
      "We designed an energetic yet structured marketing platform that organises products, industries, hardware and payments into digestible paths, with strong conversion moments like ‘Get a quote’ and a hospitality login.",
    outcome:
      "A confident platform that presents Synko's full ecosystem clearly and drives qualified quote requests from operators worldwide.",
    stats: [
      { label: "Businesses", value: "1000s" },
      { label: "Suite", value: "POS · Ordering · Payments" },
      { label: "Reach", value: "Worldwide" },
    ],
    features: [
      "Product suite across POS and digital ordering",
      "Industry-specific pathways",
      "Hardware and payments showcases",
      "Quote-request conversion flow",
      "Hospitality login entry point",
    ],
  },
  {
    slug: "launch-my-store",
    name: "LaunchMyStore",
    url: "https://launchmystore.io",
    category: "SaaS",
    tag: "AI Commerce",
    summary: "Everything you need to sell online with AI — build and launch a store, no coding required.",
    shot: shotLaunch,
    logo: logoLaunch,
    bg: "#EEF0FF",
    tech: ["Next.js", "TypeScript", "AI", "Commerce", "Stripe"],
    year: "2025",
    role: "Product design & web engineering",
    sector: "E-commerce · SaaS",
    overview:
      "LaunchMyStore gives entrepreneurs everything they need to sell online with AI — spin up a complete store, no coding required, and start selling fast.",
    challenge:
      "Aspiring sellers want to launch quickly without wrestling with tools. The product needed to promise — and prove — that anyone can go from idea to live store with AI doing the heavy lifting.",
    approach:
      "We built a high-energy acquisition experience with instant email/Google sign-up, a free-trial funnel and clear proof points, positioning AI as the fastest path to a live storefront.",
    outcome:
      "A conversion-focused platform that turns visitors into trial sign-ups with a frictionless, AI-first onboarding promise.",
    stats: [
      { label: "Setup", value: "No code" },
      { label: "Trial", value: "7-day free" },
      { label: "Core", value: "AI commerce" },
    ],
    features: [
      "AI-assisted store building",
      "Instant email and Google sign-up",
      "Free-trial acquisition funnel",
      "Clear proof and pricing paths",
      "No-code seller experience",
    ],
  },
  {
    slug: "og-organix",
    name: "OG Organix",
    url: "https://ogorganix.com.pk",
    category: "Design",
    tag: "E-commerce",
    summary: "A clean, science-led skincare storefront with best-seller merchandising and a full shopping experience.",
    shot: shotOrganix,
    logo: logoOrganix,
    bg: "#F5F5F4",
    tech: ["Shopify", "Liquid", "Brand Design", "E-commerce"],
    year: "2024",
    role: "Brand & e-commerce design",
    sector: "Skincare · E-commerce",
    overview:
      "OG Organix is a science-led skincare brand and storefront built around clear product education, best-seller merchandising and a smooth end-to-end shopping and checkout experience.",
    challenge:
      "Skincare shoppers need to trust ingredients and results. The store had to balance clean, premium branding with practical merchandising that drives discovery and conversion.",
    approach:
      "We shaped the brand and built a focused storefront with best-seller sections, product education and a frictionless cart and checkout, tuned for clarity and confidence.",
    outcome:
      "A polished, conversion-ready skincare store that communicates credibility and makes shopping effortless.",
    stats: [
      { label: "Type", value: "Storefront" },
      { label: "Focus", value: "Skincare" },
      { label: "Goal", value: "Discovery + Trust" },
    ],
    features: [
      "Clean, science-led brand identity",
      "Best-seller merchandising",
      "Product education content",
      "Full shopping and checkout flow",
      "Mobile-first storefront",
    ],
  },
  {
    slug: "vinncorp",
    name: "VinnCorp",
    url: "https://vinncorp.com",
    category: "Design",
    tag: "Talent & Delivery",
    summary: "Custom software design, development and marketing powered by on-demand tech talent.",
    shot: shotVinn,
    logo: logoVinn,
    bg: "#EFF6FF",
    tech: ["React", "WordPress", "Brand Design", "Marketing"],
    year: "2024",
    role: "Brand & web design",
    sector: "Software Services · Talent",
    overview:
      "VinnCorp delivers custom software design, development and marketing powered by on-demand technology talent, turning complex challenges into elegant solutions.",
    challenge:
      "A services company offering many capabilities risks looking generic. VinnCorp needed a presentation that felt sharp, capable and trustworthy across a wide range of offerings.",
    approach:
      "We designed a clean, confident web presence that structures services, talent and marketing into clear narratives with strong calls to action.",
    outcome:
      "A cohesive, professional presence that communicates capability and converts interest into engagements.",
    stats: [
      { label: "Model", value: "On-demand talent" },
      { label: "Offering", value: "Design + Dev + Marketing" },
      { label: "Focus", value: "Clarity" },
    ],
    features: [
      "Clear services architecture",
      "On-demand talent positioning",
      "Marketing and delivery narratives",
      "Strong conversion moments",
      "Professional, trustworthy design",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
