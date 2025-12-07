import { useRef, useMemo } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaGlobe,
  FaStream,
  FaProjectDiagram,
  FaUniversity,
  FaCogs,
  FaMedal,
  FaRocket,
  FaChevronDown
} from "react-icons/fa";

/**
 * Enhanced Journey Timeline
 * - More visually appealing with improved animations and graphics
 * - Better visual hierarchy and engagement
 * - Subtle particle effects and enhanced card designs
 */

// 🔧 Enhanced badge component
function Badge({ children }) {
  return (
    <motion.span 
      className="inline-flex items-center rounded-full border border-white/20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 px-2.5 py-1 text-xs font-medium text-white/90 shadow-lg backdrop-blur-sm"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(96, 165, 250, 0.3)" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.span>
  );
}

// Floating particles background component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
            scale: Math.random() * 0.5 + 0.2,
            opacity: Math.random() * 0.5 + 0.1
          }}
          animate={{
            x: [null, Math.random() * 100 + 'vw'],
            y: [null, Math.random() * 100 + 'vh'],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            width: Math.random() * 12 + 4 + 'px',
            height: Math.random() * 12 + 4 + 'px',
          }}
        />
      ))}
    </div>
  );
};

const TIMELINE = [
  // === 2025–Present (Latest-first) ===
  {
    range: "Sept 2025 – Present",
    title: "Software Developer Co-op — Ontario Public Service (Children & Youth I&IT)",
    desc:
      "Co-op focusing on shipping reliable software for public services: clean APIs, testing, observability, and collaborative delivery.",
    icon: FaMedal,
    highlights: [
      "Built/maintained features end-to-end with reviews & CI",
      "Improved reliability with health checks and logging",
      "Partnered with stakeholders; documented runbooks"
    ],
    tags: ["Co-op", "Backend", "APIs", "Testing"],
    accent: "from-amber-500/20 to-orange-600/20"
  },

  // === 2025 ===
  {
    range: "2025",
    title: "Accessibility, CI/CD, and Open Source",
    desc:
      "Shipped WCAG 2.1 AA improvements, set up CI/CD (GitHub Actions/Azure DevOps), and contributed small PRs upstream.",
    icon: FaTools,
    highlights: [
      "Contrast/keyboard audits; improved focus states",
      "Caching, lint/test gates in pipelines",
      "Better READMEs & CONTRIBUTING"
    ],
    tags: ["WCAG 2.1 AA", "CI/CD", "Docs"],
    accent: "from-emerald-500/20 to-teal-600/20"
  },

  // === 2025 projects ===
  {
    range: "2025",
    title: "TradeFlux — Real-time Streaming Pipeline",
    desc:
      "Real-time data ingestion + API + dashboard with health checks and latency/throughput metrics; wrote unit tests and a runbook.",
    icon: FaStream,
    highlights: [
      "Streaming ingestion & service health checks",
      "Latency/throughput instrumentation",
      "Unit tests + concise runbook"
    ],
    tags: ["Real-time", "APIs", "Testing"],
    accent: "from-blue-500/20 to-indigo-600/20"
  },
  {
    range: "2025",
    title: "ValuEdge — ML-backed Property Visualization",
    desc:
      "Served predictions with a clean UX; emphasized predictable responses and simple observability.",
    icon: FaProjectDiagram,
    highlights: [
      "REST endpoints with validation & error handling",
      "Metrics/logs for debugging",
      "Clear UX flows and empty states"
    ],
    tags: ["Full-stack", "ML Integration", "UX"],
    accent: "from-violet-500/20 to-purple-600/20"
  },

  // === 2024 ===
  {
    range: "2024",
    title: "ZenDrive — Car Rental System (Spring Boot)",
    desc:
      "Implemented core booking flows, auth, and admin views; tuned the data model and added basic audit logs.",
    icon: FaCogs,
    highlights: [
      "Domain models & repository pattern",
      "Rate limits and basic audit trails",
      "Admin dashboard for inventory/pricing"
    ],
    tags: ["Spring Boot", "Auth", "Admin UX"],
    accent: "from-rose-500/20 to-pink-600/20"
  },

  // === Education & Earlier Experience ===
  {
    range: "2023 – Present (Expected Apr 2027)",
    title: "B.Eng (Honours) Software Engineering — York University",
    desc: "Deepened CS fundamentals; active in clubs/events (e.g., CSHub).",
    icon: FaUniversity,
    highlights: [
      "Data Structures & Algorithms, Operating Systems, Computer Networks",
      "Projects with testing, version control, and documentation"
    ],
    tags: ["CS Fundamentals", "Teamwork"],
    accent: "from-cyan-500/20 to-blue-600/20"
  },
  {
    range: "2022 – 2025",
    title: "Aerospace CNC Programmer — Qualified Metal Fabricators (Toronto)",
    desc:
      "Owned programming/optimization for high-precision jobs; reduced cycle time/scrap via data-driven tweaks.",
    icon: FaLaptopCode,
    highlights: [
      "Reduced setup time; improved first-pass yield (team effort)",
      "Structured checklists; iterative, measured changes"
    ],
    tags: ["Process Optimization", "Quality", "Collaboration"],
    accent: "from-slate-500/20 to-gray-600/20"
  },
  {
    range: "Jan 2020 – May 2021",
    title: "Aerospace Manufacturing Engineering Diploma — Centennial College (Toronto)",
    desc:
      "Built a strong engineering base and first touched low-level programming (C/C++), quality systems, and process rigor.",
    icon: FaCode,
    highlights: [
      "C/C++ fundamentals, engineering math, QA mindset",
      "Hands-on with tooling, tolerance, and process documentation"
    ],
    tags: ["C", "C++", "Engineering Principles"],
    accent: "from-sky-500/20 to-cyan-600/20"
  }
];

export default function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const scaleYRaw = useTransform(scrollYProgress, [0, 1], [0.05, 1]);
  const scaleY = useSpring(scaleYRaw, { stiffness: 120, damping: 24, mass: 0.5 });

  const items = useMemo(() => TIMELINE, []);

  return (
    <section
      ref={ref}
      id="journey"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black px-4 py-16 text-white"
      aria-label="Career and project journey timeline"
    >
      <FloatingParticles />
      
      <div className="relative mx-auto max-w-6xl z-10">
        {/* Header */}
        <motion.div 
          className="mb-16 flex flex-col items-center justify-between gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="text-center text-4xl font-bold tracking-tight sm:text-left">
              <span className="text-gray-300">My Tech</span>{" "}
              <span className="italic bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="mt-2 text-center text-white/70 sm:text-left">
              From Aerospace to Software engineering
            </p>
          </div>
          
          {/* Status pill */}
          <motion.div 
            className="flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 px-4 py-2 text-sm text-white/90 shadow-lg backdrop-blur-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaGlobe className="h-4 w-4" aria-hidden="true" />
            <span>Open to internships & impactful projects</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="mb-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-white/60 mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaChevronDown className="h-5 w-5 text-white/50" />
            </motion.div>
          </div>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-16 sm:grid-cols-2">
          {/* Animated spine */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 sm:block">
            <div className="relative h-full w-1 overflow-hidden bg-white/10 rounded-full">
              <motion.div
                style={{ scaleY, originY: 0 }}
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-fuchsia-500 shadow-lg shadow-cyan-400/30"
              />
            </div>
            
            {/* Floating dots along the spine */}
            {items.map((_, idx) => (
              <motion.div
                key={idx}
                className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-lg shadow-cyan-400/30"
                style={{ top: `${(idx / (items.length - 1)) * 100}%` }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3, type: "spring", stiffness: 200 }}
              />
            ))}
          </div>

          {items.map((item, idx) => {
            const isLeft = idx % 2 === 0; // alternate on sm+
            const CardIcon = item.icon;
            
            return (
              <motion.article
                key={idx}
                className={`group relative col-span-1 ${isLeft ? "sm:pr-10" : "sm:col-start-2 sm:pl-10"}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: "easeOut" }}
              >
                {/* Connector line for mobile */}
                <div className="absolute left-6 top-6 -ml-px h-full w-0.5 bg-white/10 sm:hidden" />
                
                {/* Dot connector on spine (sm+) */}
                <div
                  className={`pointer-events-none absolute top-6 hidden h-5 w-5 -translate-y-1/2 rounded-full border-2 border-white/30 bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-lg shadow-cyan-400/30 backdrop-blur-sm sm:block ${
                    isLeft ? "right-[-10px]" : "left-[-10px]"
                  }`}
                />

                {/* Main card */}
                <div className={`relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}>
                  {/* Accent bar */}
                  <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${item.accent}`} />
                  
                  <div className="mb-4 flex items-center gap-3 text-white/80">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-black/60 shadow-inner">
                      <CardIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">{item.range}</span>
                  </div>

                  <h3 className="text-xl font-semibold leading-tight text-white">{item.title}</h3>
                  <p className="mb-4 mt-2 text-sm text-white/80 leading-relaxed">{item.desc}</p>

                  {item.highlights && (
                    <ul className="mb-4 space-y-2">
                      {item.highlights.map((h, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start text-sm text-white/75"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400/80"></span>
                          <span>{h}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((t, i) => (
                        <Badge key={i}>{t}</Badge>
                      ))}
                    </div>
                  )}
                  
                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-fuchsia-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                </div>

                {/* Decorative glow */}
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rotate-12 rounded-full bg-gradient-to-br from-cyan-500/15 to-fuchsia-500/15 blur-xl"
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </div>

        <motion.div 
          className="mt-16 text-center text-sm text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
            <FaRocket className="h-4 w-4 text-cyan-400" />
            <span>Ready for the next challenge</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
