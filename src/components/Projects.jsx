import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FiChevronRight, FiX, FiExternalLink, FiWifi, FiDroplet, FiSun } from "react-icons/fi";
import { FaGithub, FaSpotify, FaWaveSquare, FaTemperatureHigh, FaMusic } from "react-icons/fa";

// Real-time streaming visualization for TradeFlux
const TradeFluxVisualization = () => {
  const [dataPoints, setDataPoints] = useState(Array(20).fill(0));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(prev => {
        const newData = [...prev.slice(1)];
        newData.push(Math.random() * 80 + 20);
        return newData;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
      {/* Network nodes */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-cyan-400/80 shadow-lg shadow-cyan-400/30"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-cyan-400/80 shadow-lg shadow-cyan-400/30"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-cyan-400/80 shadow-lg shadow-cyan-400/30"></div>
      
      {/* Connection lines */}
      <svg className="absolute inset-0" viewBox="0 0 100 100">
        <line x1="25" y1="25" x2="75" y2="33" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="0.5" />
        <line x1="25" y1="25" x2="33" y2="67" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="0.5" />
        <line x1="75" y1="33" x2="33" y2="67" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="0.5" />
      </svg>
      
      {/* Data stream visualization */}
      <div className="absolute bottom-4 left-4 right-4 h-12 bg-black/30 rounded-lg p-1 border border-cyan-500/20">
        <div className="flex items-end h-full gap-px">
          {dataPoints.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-cyan-400 to-cyan-600 rounded-t-sm"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
      </div>
      
      {/* Moving data packets */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 100],
            y: [0, 100],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
          style={{
            left: `${Math.random() * 30}%`,
            top: `${Math.random() * 30}%`,
          }}
        />
      ))}
      
      {/* Latency metrics */}
      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm rounded-lg px-2 py-1 text-xs border border-cyan-500/30">
        <div className="text-cyan-300">p50: 28ms</div>
        <div className="text-cyan-400">p95: 85ms</div>
      </div>
    </div>
  );
};

// Property value visualization for ValuEdge
const ValuEdgeVisualization = () => {
  const [values, setValues] = useState(Array(15).fill(50));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setValues(prev => {
        const newValues = [...prev.slice(1)];
        newValues.push(Math.random() * 80 + 20);
        return newValues;
      });
    }, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/20">
      {/* Value trend chart */}
      <div className="absolute top-8 left-4 right-4 h-24 bg-black/20 rounded-lg p-2 border border-amber-500/20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polyline
            fill="none"
            stroke="rgba(245, 158, 11, 0.7)"
            strokeWidth="2"
            points={values.map((v, i) => `${(i / (values.length - 1)) * 100},${100 - v}`).join(" ")}
          />
        </svg>
      </div>
      
      {/* Property cards */}
      <div className="absolute bottom-8 left-4 right-4 flex justify-between">
        {[
          { value: "$523K", change: "+2.3%", color: "text-green-400" },
          { value: "$487K", change: "-1.2%", color: "text-red-400" },
          { value: "$612K", change: "+4.7%", color: "text-green-400" },
        ].map((prop, i) => (
          <motion.div
            key={i}
            className="w-20 h-16 bg-black/40 backdrop-blur-sm rounded-lg p-2 border border-amber-500/30"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="text-xs text-amber-300 font-semibold">{prop.value}</div>
            <div className={`text-xs ${prop.change}`}>{prop.change}</div>
          </motion.div>
        ))}
      </div>
      
      {/* Prediction indicator */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-xs text-amber-300 font-semibold">AI</div>
      </motion.div>
    </div>
  );
};

// Plant monitoring dashboard for Smart Plant Monitor
const PlantMonitorVisualization = () => {
  const [moisture, setMoisture] = useState(65);
  const [light, setLight] = useState(70);
  const [temp, setTemp] = useState(72);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMoisture(prev => Math.max(30, Math.min(90, prev + (Math.random() * 10 - 5))));
      setLight(prev => Math.max(40, Math.min(95, prev + (Math.random() * 15 - 7.5))));
      setTemp(prev => Math.max(65, Math.min(85, prev + (Math.random() * 4 - 2))));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-900/20">
      {/* Plant visualization */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="w-12 h-16 bg-emerald-700 rounded-t-full rounded-b-sm"></div>
        <div className="absolute -top-2 left-4 w-4 h-6 bg-emerald-500 rounded-full"></div>
        <div className="absolute -top-4 right-4 w-5 h-8 bg-emerald-500 rounded-full"></div>
      </div>
      
      {/* Sensor readings */}
      <div className="absolute bottom-8 left-4 right-4 grid grid-cols-3 gap-2">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-2 border border-emerald-500/30 text-center">
          <FiDroplet className="mx-auto text-cyan-400" />
          <div className="text-xs text-white mt-1">{moisture}%</div>
        </div>
        
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-2 border border-emerald-500/30 text-center">
          <FiSun className="mx-auto text-amber-400" />
          <div className="text-xs text-white mt-1">{light}%</div>
        </div>
        
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-2 border border-emerald-500/30 text-center">
          <FaTemperatureHigh className="mx-auto text-red-400" />
          <div className="text-xs text-white mt-1">{temp}°F</div>
        </div>
      </div>
      
      {/* Status indicator */}
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg px-2 py-1 text-xs border border-emerald-500/30">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-400 mr-1"></div>
          <span className="text-emerald-300">Healthy</span>
        </div>
      </div>
      
      {/* Wi-Fi connection */}
      <div className="absolute top-4 left-4">
        <FiWifi className="text-emerald-400" />
      </div>
    </div>
  );
};

// Retro music player for RetroBeats
const RetroBeatsVisualization = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTime(prev => (prev >= 100 ? 0 : prev + 0.5));
    }, 100);
    
    return () => clearInterval(interval);
  }, [isPlaying]);
  
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-red-900/20">
      {/* Cassette tape visualization */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="w-20 h-12 bg-gray-800 rounded-lg border-2 border-orange-500 relative">
          <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-gray-600 border border-orange-400"></div>
          <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gray-600 border border-orange-400"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-orange-300">RETRO</div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="absolute top-28 left-4 right-4 h-1 bg-gray-700 rounded-full">
        <motion.div
          className="h-full bg-orange-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${currentTime}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      
      {/* Playback controls */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <button className="text-orange-300 text-xs">◀◀</button>
        <button 
          className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
        <button className="text-orange-300 text-xs">▶▶</button>
      </div>
      
      {/* Song info */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <div className="text-xs text-orange-300 font-semibold">Never Gonna Give You Up</div>
        <div className="text-xs text-orange-400">Rick Astley</div>
      </div>
      
      {/* Equalizer */}
      <div className="absolute top-32 left-4 right-4 flex items-end justify-center gap-1 h-8">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 rounded-t bg-orange-500"
            animate={{
              height: isPlaying ? [`${Math.random() * 20 + 5}%`, `${Math.random() * 30 + 10}%`, `${Math.random() * 15 + 5}%`] : "10%",
            }}
            transition={{
              duration: 0.5 + (i % 3) * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.05,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Enhanced TechCover with project-specific visualizations
function TechCover({ variant = "tradeflux", isHovered = false }) {
  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden"
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Scanlines effect */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[length:100%_4px]" />
      
      {/* Project-specific visualization */}
      {variant === "tradeflux" && <TradeFluxVisualization />}
      {variant === "valuedge" && <ValuEdgeVisualization />}
      {variant === "plant" && <PlantMonitorVisualization />}
      {variant === "retrobeats" && <RetroBeatsVisualization />}
      
      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 8,
        }}
      />
    </motion.div>
  );
}

// Holographic badge component
const HolographicBadge = ({ children, className = "" }) => {
  return (
    <motion.span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm border border-white/20 ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      style={{
        background: "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2), 0 0 1px rgba(255, 255, 255, 0.1)",
      }}
      animate={{
        boxShadow: [
          "0 4px 15px rgba(0, 0, 0, 0.2), 0 0 1px rgba(255, 255, 255, 0.1)",
          "0 4px 20px rgba(0, 0, 0, 0.3), 0 0 2px rgba(255, 255, 255, 0.2)",
          "0 4px 15px rgba(0, 0, 0, 0.2), 0 0 1px rgba(255, 255, 255, 0.1)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {children}
    </motion.span>
  );
};

// Projects data
const projects = [
  {
    title: "TradeFlux",
    company: "Real-time Systems",
    date: "2025",
    description:
      "Low-latency streaming pipeline: ingestion → API → dashboard. Health checks, p50/p95, and unit-tested reliability.",
    type: "Systems",
    coverVariant: "tradeflux",
    tech: ["C++/Python", "Kafka", "FastAPI", "WebSocket", "Docker"],
    github: "https://github.com/Kartikk28/TradeFlux",
    metrics: { p50: "28 ms", p95: "85 ms", thr: "52k msg/min" },
    color: "cyan"
  },
  {
    title: "ValuEdge",
    company: "AI + Web App",
    date: "2025",
    description:
      "ML-backed property visualization with clean REST APIs, input validation, and simple observability.",
    type: "Web/AI",
    coverVariant: "valuedge",
    tech: ["React", "Flask", "XGBoost", "Tailwind", "SQLite"],
    github: "https://github.com/Kartikk28/ValuEdge",
    metrics: { p50: "110 ms", p95: "260 ms", thr: "120 req/s" },
    color: "amber"
  },
  {
    title: "Smart Plant Monitor",
    company: "IoT Project",
    date: "2024",
    description:
      "Arduino sensors (moisture, light, temp) streaming to a lightweight dashboard with alerts.",
    type: "IoT",
    coverVariant: "plant",
    tech: ["Arduino", "C++", "Grove Kit", "Sensors"],
    github: "https://github.com/Kartikk28/Plant-Watering-System-",
    metrics: { uptime: "99.8%", accuracy: "97%", alerts: "12/mo" },
    color: "emerald"
  },
  {
    title: "RetroBeats Music App",
    company: "Full Stack Web App",
    date: "2024",
    description:
      "Retro-themed music streaming app with real-time discovery and saved playlists.",
    type: "Web",
    coverVariant: "retrobeats",
    tech: ["React", "Tailwind", "Express.js", "MongoDB"],
    github: "https://github.com/Kartikk28/RetroBeats",
    metrics: { users: "1.2k", playlists: "850+", uptime: "99.9%" },
    color: "orange"
  }
];

// Main component
export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-gray-400">Explore My</span>{" "}
          <span className="italic bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" ref={containerRef}>
          {projects.map((project, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const rotateX = useTransform(y, [-100, 100], [5, -5]);
            const rotateY = useTransform(x, [-100, 100], [-5, 5]);
            
            const springConfig = { damping: 15, stiffness: 100 };
            const rotateXSpring = useSpring(rotateX, springConfig);
            const rotateYSpring = useSpring(rotateY, springConfig);
            
            return (
              <motion.article
                key={index}
                style={{
                  rotateX: rotateXSpring,
                  rotateY: rotateYSpring,
                  transformPerspective: 1000,
                }}
                onMouseMove={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  const offsetX = event.clientX - rect.left;
                  const offsetY = event.clientY - rect.top;
                  
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  
                  x.set(offsetX - centerX);
                  y.set(offsetY - centerY);
                }}
                onMouseLeave={() => {
                  x.set(0);
                  y.set(0);
                }}
                onClick={() => setSelected(project)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative cursor-pointer rounded-3xl border border-white/10 overflow-hidden shadow-2xl group"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                {/* Holographic effect border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* COVER */}
                <div className="relative h-48 sm:h-56 bg-black overflow-hidden">
                  <TechCover variant={project.coverVariant} isHovered={hovered === index} />
                  
                  {/* type & date */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                    <HolographicBadge className="bg-black/40">{project.date}</HolographicBadge>
                    <HolographicBadge className="bg-black/40">{project.type}</HolographicBadge>
                  </div>
                  
                  {/* metrics (optional) */}
                  {project.metrics && (
                    <div className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2">
                      {Object.entries(project.metrics).map(([k, v]) => (
                        <HolographicBadge key={k} className="bg-black/40 text-xs">
                          {k.toUpperCase()}: {v}
                        </HolographicBadge>
                      ))}
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                    >
                      <FiExternalLink className="text-white text-lg" />
                    </motion.div>
                  </div>
                </div>

                {/* BODY */}
                <div className="relative p-6 bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    {hovered === index && (
                      <motion.div
                        initial={{ x: -5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="text-gray-400"
                      >
                        <FiChevronRight />
                      </motion.div>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-400 font-medium mb-2">{project.company}</p>
                  
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{project.description}</p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <motion.span
                        key={i}
                        className="px-2.5 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-white/85 backdrop-blur-sm"
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-3xl max-w-3xl w-full space-y-6 relative border border-white/10 shadow-2xl"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <FiX />
                </button>
                
                <div className="h-64 rounded-xl overflow-hidden border border-white/10 relative">
                  <TechCover variant={selected.coverVariant} isHovered={true} />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">{selected.title}</h3>
                    <p className="text-sm text-gray-400">{selected.company} • {selected.date}</p>
                  </div>
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                </div>

                <p className="text-gray-300 leading-relaxed">{selected.description}</p>

                {selected.tech?.length > 0 && (
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Technologies</div>
                    <div className="flex flex-wrap gap-2">
                      {selected.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white/10 rounded-full text-sm border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selected.metrics && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-sm text-gray-400 mb-2">Performance Metrics</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {Object.entries(selected.metrics).map(([k, v]) => (
                        <div key={k} className="bg-white/5 rounded-lg p-3 text-center">
                          <div className="text-xs text-gray-400 uppercase tracking-wide">{k}</div>
                          <div className="font-semibold text-lg mt-1">{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-20 border-t border-white/10 pt-10 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg">Real-time engineering, clean APIs, and purposeful UI — with metrics that prove it.</p>
        </motion.div>
      </div>
    </section>
  );
}