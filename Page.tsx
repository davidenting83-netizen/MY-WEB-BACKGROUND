"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, Phone, MapPin, Copy, Check, Code2, Server, Layers, Sparkles, Globe, Smartphone, Palette, ShieldCheck, Menu, X } from "lucide-react";
import ProjectCarousel from "@/components/ProjectCarousel";
import { stack } from "@/lib/data";

const EMAIL = "davidenting83@gmail.com";
const PHONE = "+639975825660";
const links = [["About", "#about"], ["Tech Stack", "#stack"], ["Projects", "#projects"], ["Services", "#services"], ["Contact", "#contact"]];

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }}>{children}</motion.div>
);

const Heading = ({ title, sub }: { title: string; sub: string }) => (
  <Reveal className="mb-12 max-w-2xl">
    <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    <p className="mt-3 text-slate-400">{sub}</p>
  </Reveal>
);

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/60 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-lg font-bold text-white">EDP<span className="text-cyber">.dev</span></a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map(([l, h]) => <li key={h}><a href={h} className="text-sm text-slate-300 transition hover:text-cyber">{l}</a></li>)}
          <li><a href="#contact" className="btn-primary !px-5 !py-2 text-sm">Hire Me</a></li>
        </ul>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-obsidian/90 px-5 backdrop-blur-md md:hidden">
            {links.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3 text-slate-300">{l}</a></li>)}
            <li className="py-3"><a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">Hire Me</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

function Avatar() {
  const badges = [["TypeScript", "top-2 left-0", "0s"], ["Next.js", "top-16 -right-2", "1s"], ["Supabase", "bottom-10 -left-2", "2s"], ["Secure", "bottom-0 right-4", "1.5s"]];
  return (
    <div className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96">
      <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cyber/40 to-emerald/30 blur-3xl" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full float" role="img" aria-label="Developer emblem">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#06B6D4" /><stop offset="1" stopColor="#10B981" /></linearGradient>
          <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".18" /><stop offset="1" stopColor="#fff" stopOpacity=".03" /></linearGradient>
        </defs>
        <polygon points="200,28 352,114 352,286 200,372 48,286 48,114" fill="url(#glass)" stroke="url(#g1)" strokeWidth="2" />
        <polygon points="200,70 316,136 316,264 200,330 84,264 84,136" fill="#090D16" fillOpacity=".7" stroke="#fff" strokeOpacity=".12" />
        {/* head + shoulders */}
        <circle cx="200" cy="150" r="46" fill="url(#g1)" />
        <path d="M110 282c8-52 46-76 90-76s82 24 90 76c-26 22-56 34-90 34s-64-12-90-34z" fill="url(#g1)" fillOpacity=".85" />
        {/* code brackets on chest */}
        <path d="M176 250l-18 18 18 18M224 250l18 18-18 18M208 244l-16 48" stroke="#090D16" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* visor */}
        <rect x="170" y="140" width="60" height="16" rx="8" fill="#090D16" fillOpacity=".75" />
        <rect x="178" y="145" width="44" height="6" rx="3" fill="#10B981" />
      </svg>
      {badges.map(([t, pos, d]) => (
        <span key={t} style={{ animationDelay: d }} className={`float glass absolute ${pos} !rounded-full px-3 py-1.5 text-xs font-medium text-cyber`}>{t}</span>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 md:grid-cols-2 md:pt-40">
      <div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="glass mb-6 inline-flex items-center gap-2.5 !rounded-full px-4 py-2 text-sm text-emerald">
          <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald" /></span>
          Open for Projects • Brooke&apos;s Point, Palawan
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Elmer David P. <span className="bg-gradient-to-r from-cyber to-emerald bg-clip-text text-transparent">Enting</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-xl text-slate-200">
          Building fast, scalable web &amp; mobile apps with clean UI/UX with strong security.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} id="about" className="mt-4 max-w-xl scroll-mt-28 text-slate-400">
          Full-Stack Web &amp; App Developer and AI-accelerated product builder. I ship end-to-end products at speed: real-time data tracking, multi-role access systems, and mobile-first architecture that holds up in production.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="btn-primary">Explore My Work</a>
          <a href="#contact" className="btn-ghost">Contact Me</a>
        </motion.div>
      </div>
      <Avatar />
    </section>
  );
}

const icons = [Code2, Layers, Server, Sparkles];
function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-20">
      <Heading title="Tech Stack & Core Specialties" sub="The tools I use to design, build, and ship reliable products." />
      <div className="grid gap-5 sm:grid-cols-2">
        {stack.map((g, i) => { const Icon = icons[i]; return (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="glass glass-hover h-full p-6">
              <div className="mb-4 flex items-center gap-3"><Icon className="h-5 w-5 text-cyber" /><h3 className="font-display text-lg font-semibold text-white">{g.title}</h3></div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => <span key={it} className="cursor-default rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-emerald/50 hover:text-emerald">{it}</span>)}
              </div>
            </div>
          </Reveal>); })}
      </div>
    </section>
  );
}

const services = [
  { Icon: Globe, t: "Custom Web App Development", d: "Scalable, secure full-stack apps tailored to business workflows." },
  { Icon: Smartphone, t: "Android App Conversion / APK", d: "Transforming web apps into installable, native-feeling Android applications." },
  { Icon: Palette, t: "UI/UX Redesign", d: "Modernizing interfaces with smooth animations, glassmorphism, and mobile-first layouts." },
  { Icon: ShieldCheck, t: "Database & Security Setup", d: "PostgreSQL/Supabase architecture, Row-Level Security, and multi-role authentication." },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <Heading title="Services" sub="Clear scope, fast delivery, and security built in from the start." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ Icon, t, d }, i) => (
          <Reveal key={t} delay={i * 0.08}>
            <div className="glass glass-hover h-full p-6">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyber/20 to-emerald/20 text-cyber"><Icon className="h-6 w-6" /></div>
              <h3 className="font-display text-lg font-semibold text-white">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [toast, setToast] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); } catch { /* clipboard unavailable */ }
    setToast(true); setTimeout(() => setToast(false), 2200);
  };
  const card = "glass glass-hover flex items-center gap-4 p-5 text-left";
  const ico = "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyber/15 text-cyber";
  const socials = [[Github, "GitHub", "https://github.com/davidenting83-netizen"], [Linkedin, "LinkedIn", "https://www.linkedin.com/in/elmer-david-enting-7341973b9/"], [Facebook, "Facebook", "https://www.facebook.com/profile.php?id=61596765207325"]] as const;
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <Heading title="Let's build something" sub="Tell me about your project. I reply to every message, for local and remote work." />
      <div className="grid gap-4 md:grid-cols-3">
        <button onClick={copy} className={card} aria-label="Copy email address">
          <span className={ico}><Mail /></span>
          <span className="min-w-0 flex-1"><span className="block text-xs text-slate-400">Email</span><span className="block truncate text-white">{EMAIL}</span><span className="text-xs text-cyber">Copy Email</span></span>
          <Copy className="h-4 w-4 text-slate-400" />
        </button>
        <a href={`tel:${PHONE}`} className={card}>
          <span className={ico}><Phone /></span>
          <span><span className="block text-xs text-slate-400">Phone / WhatsApp / Viber</span><span className="block text-white">{PHONE}</span></span>
        </a>
        <div className={card}>
          <span className={ico}><MapPin /></span>
          <span><span className="block text-xs text-slate-400">Location</span><span className="block text-white">Maasin, Brooke&apos;s Point, Palawan</span></span>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {socials.map(([Icon, name, href]) => (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-5 !py-2.5 text-sm"><Icon className="h-4 w-4" />{name}</a>
        ))}
        <a href={`https://wa.me/${PHONE.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5 text-sm">Message on WhatsApp</a>
      </div>
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} role="status"
            className="glass fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 !bg-obsidian/90 px-5 py-3 text-sm text-emerald">
            <Check className="h-4 w-4" /> Email copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-obsidian">
        <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-cyber/10 blur-[120px]" />
        <div className="absolute -right-40 top-1/2 h-[28rem] w-[28rem] rounded-full bg-emerald/10 blur-[120px]" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <section id="projects" className="py-20">
          <div className="mx-auto max-w-6xl px-5"><Heading title="Featured Projects" sub="Live products I designed and built. Hover to pause, drag or swipe to browse." /></div>
          <ProjectCarousel />
        </section>
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2026 Elmer David P. Enting. Built with Next.js &amp; Tailwind CSS.
      </footer>
    </>
  );
                }
