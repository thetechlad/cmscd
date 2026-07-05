import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import imgNook from "@/assets/shot-nooktravel.png";
import imgSuuper from "@/assets/shot-suuper.png";
import imgPlural from "@/assets/shot-plural.png";
import imgModisoft from "@/assets/shot-modisoft.png";
import imgKidan from "@/assets/shot-kidan.png";
import imgVinn from "@/assets/shot-vinncorp.png";
import imgOrganix from "@/assets/shot-ogorganix.png";

const projects = [
  { name: "Suuper",          url: "https://suuper.cc",          img: imgSuuper,   tag: "AI Support SaaS",       body: "An AI reply engine that trains on a business and answers customers across web and WhatsApp in seconds — no code, live in under a minute.", bg: "#EEF2FF" },
  { name: "Kidan",           url: "https://kidan.co",           img: imgKidan,    tag: "Enterprise IT",         body: "A polished marketing and services surface for a Swiss enterprise IT partner spanning security, strategy and scalable cloud technology.", bg: "#0B1220" },
  { name: "Modisoft",        url: "https://modisoft.com",       img: imgModisoft, tag: "Retail SaaS",           body: "POS, inventory and back-office tooling trusted by 10,000+ retail and restaurant operators, unified into one cohesive point-of-sale platform.", bg: "#F0FDF4" },
  { name: "Plural Dynamics", url: "https://pluraldynamics.com", img: imgPlural,   tag: "Tech Consulting",       body: "A bold, cinematic brand and platform for a global technology consultancy delivering world-class software through a refined process.", bg: "#1A1113" },
  { name: "VinnCorp",        url: "https://vinncorp.com",       img: imgVinn,     tag: "Talent & Delivery",     body: "Custom software design, development and marketing powered by on-demand tech talent — turning complex challenges into elegant solutions.", bg: "#EFF6FF" },
  { name: "NookTravel",      url: "https://nooktravel.space",   img: imgNook,     tag: "Travel Platform",       body: "An AI itinerary product that builds a personalised day-by-day plan with budget, hotels, food and packing — all generated in minutes.", bg: "#FEF2F2" },
  { name: "OG Organix",      url: "https://ogorganix.com.pk",   img: imgOrganix,  tag: "E-commerce",            body: "A clean, science-led skincare storefront with best-seller merchandising, product education and a full shopping and checkout experience.", bg: "#F5F5F4" },
];


const Portfolio = () => (
  <Reveal as="section" className="bg-background section">
    <div className="container-tight">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal-child">
        <div>
          <div className="label-eyebrow mb-6">Client Work</div>
          <h2 className="display text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.1]">
            Things we've built.
          </h2>
        </div>
        <a href="https://cal.com/tayyabirfan/15min" target="_blank" rel="noreferrer" className="link-blue">Start your project <ArrowUpRight className="w-4 h-4" /></a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            key={p.name}
            className="reveal-child card-light overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.25)]"
            style={{ minHeight: 400 }}
          >
            <div
              className="relative flex-1 overflow-hidden"
              style={{ background: p.bg, minHeight: 220 }}
            >
              <img
                src={p.img}
                alt={`${p.name} website screenshot`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
              />
              <div className="absolute top-5 left-5">
                <span className="text-[11px] uppercase tracking-[0.15em] font-semibold px-3 py-1.5 rounded-full bg-white/85 backdrop-blur text-foreground">{p.tag}</span>
              </div>
            </div>
            <div className="p-7 bg-white">
              <div className="display text-2xl md:text-3xl font-bold tracking-tight mb-2 group-hover:text-accent-blue transition-colors">{p.name}</div>
              <p className="text-sm text-muted-foreground leading-[1.7] mb-5">{p.body}</p>
              <span className="link-blue">Visit live site <ArrowUpRight className="w-4 h-4" /></span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </Reveal>
);

export default Portfolio;
