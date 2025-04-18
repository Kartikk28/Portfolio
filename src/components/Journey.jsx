import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaLaptopCode, FaTools, FaReact, FaGlobe } from "react-icons/fa";
import { useRef } from "react";

const journey = [
  {
    year: "2025",
    title: "Freelancing & Contributing to Open Source",
    desc: "Hosted personal projects on GitHub, contributed to open-source repositories, improved my UI/UX skills, and built ZenDrive, a car rental system using Spring Boot.",
    icon: <FaGlobe className="text-pink-400 text-2xl" />,
  },
  {
    year: "2024",
    title: "Developed Smart Plant Monitor & Other Systems",
    desc: "Created IoT-based smart systems using Arduino, Java, and sensors for plant monitoring. Developed multiple embedded systems for various projects.",
    icon: <FaTools className="text-green-500 text-2xl" />,
  },
  {
    year: "2023",
    title: "Started Software Engineering at York University",
    desc: "Began my Software Engineering degree, participated in student clubs such as CSHub, collaborated in tech events and workshops.",
    icon: <FaReact className="text-cyan-500 text-2xl" />,
  },
  {
    year: "2022",
    title: "Worked as a CNC Programmer at Qualified Metal Fabricators, Toronto",
    desc: "Worked as a CNC programmer for 2 years, optimizing manufacturing processes, operating machinery, and performing quality control in a high-precision environment. Gained practical skills in programming and working with automation technologies.",
    icon: <FaLaptopCode className="text-orange-500 text-2xl" />,
  },
  {
    year: "2021",
    title: "Completed Aerospace Manufacturing Engineering Diploma",
    desc: "Completed the Aerospace Manufacturing Engineering program at Centennial College, Toronto, from September 2019 to April 2021. Learned core subjects like C, and C++ which sparked my interest in software development. This program provided me with a solid foundation in engineering principles, manufacturing processes, and hands-on experience with various mechanical and software tools.",
    icon: <FaCode className="text-blue-500 text-2xl" />,
  },
];

function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <section ref={ref} id="journey" className="min-h-screen bg-black text-white py-12 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">
          <span className="text-gray-400">My Tech</span> <span className="italic text-white">Journey</span>
        </h2>

        {/* Horizontal Progress Bar */}
        <motion.div style={{ scaleX }} className="origin-left h-1 bg-gradient-to-r from-blue-500 to-fuchsia-500 mb-8 w-full" />

        <div className="space-y-12">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-md hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-600 shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.year} - {item.title}</h3>
                <p className="text-gray-300 text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
