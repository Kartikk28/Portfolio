import { motion } from "framer-motion";
import { useState } from "react";
import { FiMonitor, FiSmartphone, FiChevronRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Smart Plant Monitor",
    company: "IoT Project",
    description:
      "A smart plant pot system with moisture, sunlight, and temperature sensors. Sends data to a dashboard.",
    type: "Mobile",
    image: "arduino.png",
    tech: ["Arduino", "C++", "Grove Kit", "Sensors"],
    github: "https://github.com/yourprofile/Plant-Watering-System-"
  },
  {
    title: "ZenDrive",
    company: "Full Stack Web App",
    description:
      "A modern car rental platform built with user authentication, vehicle listings, booking system, and admin dashboard.",
    type: "Web",
    image: "zendrive.png" ,
    tech: ["React", "Spring Boot", "MySQL", "JWT"],
    github: "https://github.com/Kartikk28/Car_Rental"
  },
  {
    title: "RetroBeats Music App",
    company: "Full Stack Web App",
    description:
      "Retro-themed music streaming app with real-time track discovery and saved playlists.",
    type: "Web",
    image: "retrobeats.png",
    imageWidth: "150%",   // Add image width here
    imageHeight: "auto",  // Add image height here
    tech: ["React", "Tailwind", "Express.js", "MongoDB"],
    github: "https://github.com/Kartikk28/RetroBeats"
  },
  {
    title: "Mark Management System",
    company: "Full Stack Web App",
    description:
      "CRUD web platform to manage student marks with login, edit, and graph analytics.",
    type: "Web",
    image: "mark.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Kartikk28/MarkManagement"
  }
];

function Projects() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gray-400">Explore My</span>{" "}
          <span className="italic text-white">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(project)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative cursor-pointer rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md shadow-[0_15px_60px_rgba(0,0,0,0.4)] overflow-hidden transition-transform hover:scale-[1.03] hover:shadow-[0_25px_80px_rgba(0,0,0,0.5)] group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Top LED Indicators */}
              <div className="absolute top-4 left-5 flex space-x-2 z-10">
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              </div>

              {/* Image Block */}
              <div className="relative aspect-video bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-3xl mx-auto"
                  style={{
                    width: "project.imageWidth", // Try 75%, 85%, 95% etc. — tweak as needed
                    height: "370px", // or "auto", "200px", etc.
                    objectFit: "contain", // Try "contain" or "cover"
                    padding: "0.5rem"
                  }}
                />
              </div>

              {/* Content Block */}
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  {hovered === index && (
                    <FiChevronRight className="text-gray-400 animate-pulse" />
                  )}
                </div>
                <p className="text-sm text-gray-400 font-medium mb-1">
                  {project.company}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Glass reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 rounded-3xl blur-lg opacity-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selected && (
          <div className="fixed inset-0 z-30 bg-black/80 flex items-center justify-center p-4">
            <div
              className="bg-zinc-900 text-white p-6 rounded-xl max-w-xl w-full space-y-4 relative"
              style={{
                top: '-8%', // Manually adjust the position (you can tweak this as per your preference)
                left: '20%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold">{selected.title}</h3>
              <p className="text-sm text-gray-400">{selected.company}</p>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-48 object-contain p-2 rounded-lg"
              />
              <p className="text-gray-300 text-sm">{selected.description}</p>
              <div className="text-sm text-gray-400">Technologies:</div>
              <ul className="flex flex-wrap gap-2 text-sm">
                {selected.tech.map((t, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 bg-white/10 rounded-full text-white"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm text-blue-400 hover:underline"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </a>
            </div>
          </div>
        )}

        <motion.div
          className="mt-20 border-t border-white/10 pt-10 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p>
            Each project is crafted with care — reflecting functionality, UI precision, and purpose-driven design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
