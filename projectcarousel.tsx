"use client";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, ImageOff } from "lucide-react";
import { projects, type Project } from "@/lib/data";

function Card({ p }: { p: Project }) {
  const [failed, setFailed] = useState(false);
  return (
    <article className="glass glass-hover w-[300px] sm:w-[360px] shrink-0 overflow-hidden flex flex-col select-none">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-cyber/15 via-obsidian to-emerald/15 border-b border-white/10">
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={`${p.title} preview`} loading="lazy" draggable={false}
            onError={() => setFailed(true)} className="h-full w-full object-cover object-top" />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-center text-slate-400 p-4">
            <div>
              <ImageOff className="mx-auto mb-2 h-8 w-8 text-cyber/70" />
              <p className="font-display font-semibold text-slate-200">{p.title}</p>
              <p className="text-xs mt-1">Add screenshot to <code className="text-cyber">public{p.image}</code></p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border border-cyber/30 bg-cyber/10 px-2.5 py-0.5 text-xs text-cyber">{t}</span>
          ))}
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.desc}</p>
        <a href={p.link} target="_blank" rel="noopener noreferrer" draggable={false}
          className="btn-primary mt-5 !py-2.5 text-sm">Live Preview ↗</a>
      </div>
    </article>
  );
}

export default function ProjectCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef(0);
  const paused = useRef(false);
  const resume = useRef<ReturnType<typeof setTimeout>>();
  const drag = useRef({ active: false, x: 0, left: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // manual swipe only
    let raf = 0, last = performance.now(), visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    const tick = (t: number) => {
      const dt = Math.min(t - last, 64);
      last = t;
      if (visible) {
        const half = el.scrollWidth / 2;
        if (paused.current) {
          if (el.scrollLeft >= half) el.scrollLeft -= half; // keep manual swiping looped
          pos.current = el.scrollLeft;
        } else {
          pos.current += dt * 0.035; // px/ms: slow & smooth
          if (pos.current >= half) pos.current -= half;
          el.scrollLeft = pos.current;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);

  const pause = () => { clearTimeout(resume.current); paused.current = true; };
  const play = (delay = 0) => { clearTimeout(resume.current); resume.current = setTimeout(() => (paused.current = false), delay); };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-obsidian to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-obsidian to-transparent" />
      <div
        ref={ref}
        className="no-scrollbar flex gap-5 overflow-x-auto px-4 py-4 cursor-grab active:cursor-grabbing"
        onMouseEnter={pause}
        onMouseLeave={() => { drag.current.active = false; play(300); }}
        onTouchStart={pause}
        onTouchEnd={() => play(2500)}
        onFocus={pause}
        onBlur={() => play(300)}
        onMouseDown={(e) => { drag.current = { active: true, x: e.pageX, left: ref.current!.scrollLeft }; }}
        onMouseMove={(e) => { if (drag.current.active) ref.current!.scrollLeft = drag.current.left - (e.pageX - drag.current.x); }}
        onMouseUp={() => (drag.current.active = false)}
        aria-label="Featured projects carousel"
      >
        {[...projects, ...projects].map((p, i) => <Card key={`${p.title}-${i}`} p={p} />)}
      </div>
    </div>
  );
    }
