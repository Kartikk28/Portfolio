// Journey.jsx (Power BI-style + Parallax Scroll Reveal with resume-based expansion)
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaUserFriends, FaTools, FaReact, FaLaptopCode, FaGlobe } from "react-icons/fa";
import { useRef } from "react";

const journey = [
  {
    year: "2022",
    title: "Completed Aerospace Manufacturing Engineering diploma",
    desc: "Learned Java and C during college, sparking my interest in software. Built foundational CS knowledge alongside mechanical understanding.",
    icon: <FaCode className="text-blue-500 text-xl" />,
  },
  {
    year: "2023",
    title: "Began Software Engineering at York University",
    desc: "Participated in student clubs like CSHub and Robotics Society. Built first full-stack applications and contributed to campus tech events.",
    icon: <FaUserFriends className="text-purple-400 text-xl" />,
  },

  {
    year: "2024",
    title: "Developed Smart Plant Monitor & other systems",
    desc: "Created an IoT plant monitoring system using Arduino, sensors, and a web-based dashboard. Designed and deployed several embedded systems.",
    icon: <FaTools className="text-green-400 text-xl" />,
  },
  {
    year: "2024",
    title: "Launched RetroBeats Music Web App",
    desc: "Built a full-stack music platform using React, Tailwind, Express.js, and MongoDB. Connected APIs for album art and audio previews.",
    icon: <FaReact className="text-cyan-400 text-xl" />,
  },
  {
    year: "2025",
    title: "Freelancing, Contributing to Open Source & Hosting Projects",
    desc: "Hosted personal projects, contributed to GitHub repos, and improved UI/UX skills. Built ZenDrive, a full car rental system using Spring Boot.",
    icon: <FaGlobe className="text-pink-400 text-xl" />,
  }
];

function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <section ref={ref} className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-20">
          <span className="text-gray-400">My Tech</span> <span className="italic text-white">Journey</span>
        </h2>

        {/* Horizontal Progress Bar */}
        <motion.div style={{ scaleX }} className="origin-left h-1 bg-gradient-to-r from-blue-500 to-fuchsia-500 mb-12 w-full" />

        <div className="space-y-20">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-6 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black border border-gray-700 shadow-inner">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-gray-400 mr-2">{item.year}</span>{item.title}
                </h3>
                <p className="text-gray-300 mt-2 text-sm leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
