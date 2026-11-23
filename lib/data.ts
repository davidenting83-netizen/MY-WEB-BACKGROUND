export type Project = { title: string; desc: string; tags: string[]; link: string; image: string };

export const projects: Project[] = [
  { title: "INC MineSync", desc: "Enterprise mining operations & environmental monitoring dashboard with multi-role access, offline-first sync, and real-time reporting.", tags: ["Next.js", "Supabase", "Offline-first"], link: "https://minesyncoffline.vercel.app/", image: "/images/minesync.png" },
  { title: "TaraBook", desc: "Online booking web application for local businesses and services across the Philippines with instant scheduling and business management.", tags: ["React", "Booking", "Dashboard"], link: "https://tarabook-app.vercel.app/", image: "/images/tarabook.png" },
  { title: "Payko Payment Gateway", desc: "Fast, secure digital payment gateway solution designed for seamless online merchant transactions and automated payment verification.", tags: ["Payments", "Security", "TypeScript"], link: "https://payko-app.vercel.app/", image: "/images/payko.png" },
  { title: "Palaweño Hub", desc: "Centralized community web platform built for Palaweños, featuring local utility updates, market prices, health, and disaster advisories.", tags: ["Community", "Next.js", "Real-time"], link: "https://palawanhub.vercel.app/", image: "/images/palawanhub.png" },
  { title: "XAU/USD Sentiment Terminal", desc: "Real-time macro news intelligence and AI sentiment analysis web app for Gold/USD traders, scoring market bias (Bullish, Bearish, or Neutral).", tags: ["AI", "Real-time", "Trading"], link: "https://xau-usd-sentiment-analysis-app.vercel.app", image: "/images/xauusd.png" },
  { title: "UltraCam 100x Super-Zoom", desc: "Cross-device web camera utility unlocking up to 100x hybrid optical/digital zoom directly from mobile and desktop browsers.", tags: ["Web Camera", "Mobile-first", "PWA"], link: "https://ultracam.vercel.app/", image: "/images/ultracam.png" },
];

export const stack = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "HTML/CSS", "PLpgSQL", "Shell"] },
  { title: "Frameworks & UI", items: ["React", "Next.js", "Tailwind CSS"] },
  { title: "Backend & Cloud", items: ["Supabase", "Firebase", "Vercel", "GitHub"] },
  { title: "Core Specialties", items: ["Role-based Dashboards", "Real-time Monitoring Systems", "Booking Apps", "Payment Gateway Integration", "Business Websites", "Mobile-First Design"] },
];
