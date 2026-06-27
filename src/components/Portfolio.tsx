import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import imgNook from "@/assets/proj-nooktravel.jpg";
import imgSuuper from "@/assets/proj-suuper.jpg";
import imgPlural from "@/assets/proj-plural.jpg";
import imgModisoft from "@/assets/proj-modisoft.jpg";
import imgKidan from "@/assets/proj-kidan.jpg";

const projects = [
  { name: "NookTravel",      url: "https://nooktravel.space",   img: imgNook,     tag: "Travel Platform",       body: "A discovery and itinerary product for modern travellers — search, plan and book in one cohesive flow.", bg: "#EFF6FF", text: "#1E3A8A" },
  { name: "Suuper",          url: "https://suuper.cc",          img: imgSuuper,   tag: "Consumer Super-App",    body: "A cross-category consumer experience engineered for speed, with realtime state across web and mobile.", bg: "#F0FDF4", text: "#14532D" },
  { name: "Plural Dynamics", url: "https://pluraldynamics.com", img: imgPlural,   tag: "Enterprise Engineering",body: "End-to-end systems engineering for an enterprise platform: services, dashboards, integrations.", bg: "#FFF7ED", text: "#7C2D12" },
  { name: "Modisoft",        url: "https://modisoft.com",       img: imgModisoft, tag: "Retail SaaS",            body: "POS, inventory and back-office tooling for thousands of retail and restaurant operators.", bg: "#F5F3FF", text: "#4C1D95" },
  { name: "Kidan",           url: "https://kidan.cc",           img: imgKidan,    tag: "Web3 Studio",            body: "A Web3 product studio brand and platform — smart contracts, dashboards, and a polished marketing surface.", bg: "#FEF2F2", text: "#7F1D1D" },
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
                src={shot(p.url)}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
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
