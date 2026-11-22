"use client";
import { useState } from "react";
import { BadgeCheck } from "lucide-react";

const floating = [["TypeScript", "top-0 left-0", "0s"], ["Next.js", "top-14 -right-3", "1s"], ["Supabase", "bottom-14 -left-3", "2s"], ["Secure", "bottom-0 right-2", "1.5s"]];

function Face({ src, alt, initials }: { src: string; alt: string; initials: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-cyber/30 to-emerald/30 font-display text-5xl font-bold text-white">{initials}</div>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} draggable={false} onError={() => setFailed(true)} className="h-full w-full object-cover" />
  );
}

export default function ProfileAvatar() {
  const [flipped, setFlipped] = useState(false);
  const hide = { backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" } as const;

  return (
    <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyber/40 to-emerald/30 blur-3xl" />

      <div className="float relative h-full w-full">
        {/* Gradient ring + flip card */}
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          aria-pressed={flipped}
          aria-label={flipped ? "Showing Elmer's photo. Tap to flip back" : "Tap to reveal Elmer's photo"}
          className="group relative block h-full w-full rounded-full bg-gradient-to-br from-cyber to-emerald p-[5px] shadow-[0_0_60px_-10px_rgba(6,182,212,.6)] outline-none focus-visible:ring-4 focus-visible:ring-cyber/50"
          style={{ perspective: 1000 }}
        >
          <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d", transition: "transform .8s cubic-bezier(.4,.2,.2,1)", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
            <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-obsidian" style={hide}>
              <Face src="/images/avatar-spiderman.jpg" alt="Spider-Man avatar" initials="EDP" />
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-obsidian" style={{ ...hide, transform: "rotateY(180deg)" }}>
              <Face src="/images/avatar-profile.jpg" alt="Elmer David P. Enting" initials="EDP" />
            </div>
          </div>
        </button>

        {/* Verified badge (stays put while the photo flips) */}
        <span className="pointer-events-none absolute bottom-3 right-3 grid place-items-center rounded-full bg-obsidian p-0.5 sm:bottom-4 sm:right-4" title="Verified professional">
          <BadgeCheck className="h-11 w-11 fill-cyber text-obsidian drop-shadow-[0_0_10px_rgba(6,182,212,.8)]" strokeWidth={1.75} aria-label="Verified professional" />
        </span>

        {floating.map(([t, pos, d]) => (
          <span key={t} style={{ animationDelay: d }} className={`float glass absolute ${pos} !rounded-full px-3 py-1.5 text-xs font-medium text-cyber`}>{t}</span>
        ))}
      </div>

      <p className="absolute -bottom-9 left-0 right-0 text-center text-xs text-slate-400" aria-live="polite">
        {flipped ? "Tap to flip back" : "Tap the avatar to meet me"}
      </p>
    </div>
  );
        }
