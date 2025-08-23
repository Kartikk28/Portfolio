import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* --- Small UI atoms (sizes bumped) --- */
function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[13px] text-white/90 backdrop-blur-sm">
      {children}
    </span>
  );
}

function CTA({ href, children, variant = "ghost" }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-[15px] font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70";
  if (variant === "accent") {
    return (
      <a
        href={href}
        className={`${base} border border-transparent bg-gradient-to-r from-cyan-500/90 to-fuchsia-500/90 hover:from-cyan-400 hover:to-fuchsia-400 text-black shadow-[0_8px_30px_rgba(0,0,0,0.35)]`}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className={`${base} border border-white/15 bg-white/[0.06] hover:bg-white/[0.12]`}
    >
      {children}
    </a>
  );
}

/* --- Word cycler (stays one line) --- */
function WordCycler({ words, interval = 2200 }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval]);

  return (
    <span
      aria-live="polite"
      className="inline-block align-top w-[20ch] whitespace-nowrap"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.34, ease: "easeOut" }}
          className="inline-block bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.35)]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ================== HERO ================== */
export default function Hero() {
  const skills = ["C++/C#/Java", "Kafka/FastAPI", "Spring Boot", "Embedded C/C++", "Testing & CI/CD"];
  const phrases = ["real-time systems", "full-stack apps", "ML services"];

  return (
    <section
      id="home"
      className="relative flex min-h-[55vh] items-center justify-center bg-black from-black via-[#0d0d0d] to-black px-6 pt-24 text-white"
      aria-label="Introduction"
    >
      {/* Ambient blobs */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full"
        style={{ background:"radial-gradient(closest-side, rgba(34,211,238,0.22), transparent 70%)" }}
        animate={{ x: [0, 18, -10, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full"
        style={{ background:"radial-gradient(closest-side, rgba(232,121,249,0.20), transparent 70%)" }}
        animate={{ x: [0, -14, 10, 0], y: [0, -8, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ========= OUTER BOX — tweak max-w / min-h here ========= */}
      <div
        className="
          relative w-full max-w-[85rem] min-h-[65vh]
          overflow-hidden rounded-[28px] border-[8px] border-[#323232]
          bg-[#0b0b0b] px-10 md:px-16 py-14 md:py-20 shadow-[0_0_80px_rgba(0,0,0,0.2)]
        "
      >
        {/* Edge glow */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 rounded-[18px] opacity-0 ring-1 ring-transparent transition-opacity duration-300 hover:opacity-100">
          <div className="absolute -inset-[1px] rounded-[18px] bg-[conic-gradient(from_120deg,rgba(34,211,238,0.22),rgba(232,121,249,0.22),transparent_70%)] blur-[18px]" />
        </div>

        {/* Mac window dots */}
        <div className="absolute left-6 top-6 z-10 flex space-x-2">
          <span className="h-3 w-3 rounded-full border border-red-900 bg-red-500" />
          <span className="h-3 w-3 rounded-full border border-yellow-800 bg-yellow-400" />
          <span className="h-3 w-3 rounded-full border border-green-800 bg-green-500" />
        </div>

        {/* Gloss + fine grid */}
        <div aria-hidden="true" className="pointer-events-none absolute left-0 top-[3px] z-0 h-14 w-full rounded-t-[20px] bg-gradient-to-b from-white/10 to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 rotate-6 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),transparent_55%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-[0.12] bg-[linear-gradient(0deg,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:22px_22px]" />

        {/* Content — now spans the card and centers vertically */}
        <div className="relative z-10 h-full w-full max-w-none">
          <div className="h-full w-full flex flex-col justify-center">
            {/* Larger headline & subhead */}
            <motion.h1
              className="text-[76px] md:text-[88px] leading-[1.02] font-extrabold tracking-tight drop-shadow-[0_2px_12px_rgba(255,255,255,0.45)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Hi, I’m <span className="text-white">Kartik</span>.
            </motion.h1>

            <motion.h2
              className="mt-5 text-[44px] md:text-[52px] italic text-white/95 leading-[1.1] whitespace-nowrap"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              I build <WordCycler words={phrases} />.
            </motion.h2>

            {/* Bigger badges */}
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {skills.map((s, i) => (
                <Badge key={i}>{s}</Badge>
              ))}
              <Badge>Toronto, Canada</Badge>
              <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-[13px] text-emerald-300 shadow-sm">
                Open to internships & impactful projects
              </span>
            </motion.div>

            {/* Larger CTAs */}
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              <CTA href="#projects">Explore Projects</CTA>
              <CTA href="mailto:kartik28@my.yorku.ca" variant="accent">Contact Me</CTA>
            </motion.div>

            {/* Bottom meta — spaced further */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-[13px] text-white/65">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                <span>Real-time & event-driven systems • Clean APIs • Testing & Docs</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="https://github.com/Kartikk28" target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">GitHub</a>
                <a href="https://www.linkedin.com/in/erks/" target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">LinkedIn</a>
                <a href="mailto:kartik28@my.yorku.ca" className="underline-offset-2 hover:underline">Email</a>
                <a href="https://kartiksharma-vert.vercel.app" target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}
