import { motion } from "framer-motion";
import { useRef } from "react";
import { FaHeart, FaTree, FaMusic, FaUsers } from "react-icons/fa";

// Floating particles background component (same as in Journey)
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

function Info() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="info"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black px-4 py-16 text-white"
      aria-label="About me section"
    >
      <FloatingParticles />
      
      <div className="relative mx-auto max-w-6xl z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-gray-300">About</span>{" "}
          <span className="italic bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* Block 1: Profile Picture */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl w-full mb-20">
          <motion.div
            className="w-full md:w-1/2 aspect-[3/4] rounded-2xl overflow-hidden group relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
              <span className="text-white text-lg font-medium">Kartik - Software Engineer</span>
            </div>
            <div className="absolute inset-0 border border-cyan-500/30 rounded-2xl pointer-events-none"></div>
            <motion.div 
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="First.jpeg" 
                alt="Me" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="w-full md:w-1/2 space-y-6 p-8 rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
                <FaHeart className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold">Who I Am</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Kartik, a Software Engineering student who enjoys building sleek, efficient, and meaningful tools. 
              I love turning ideas into digital products and always look for projects that help people in real ways.
            </p>
            <div className="pt-4 mt-4 border-t border-white/10">
              <span className="text-sm text-cyan-400 font-medium">Passionate about:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Clean Code", "Problem Solving", "User Experience", "Continuous Learning"].map((item, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Block 2: Free Time */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-6xl w-full mb-20">
          <motion.div
            className="w-full md:w-1/2 space-y-6 p-8 rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
                <FaTree className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold">In My Free Time</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I enjoy hiking, kayaking, and exploring the outdoors. Nature recharges me and gives me clarity to come back to code with fresh ideas.
            </p>
            <div className="pt-4 mt-4 border-t border-white/10">
              <span className="text-sm text-emerald-400 font-medium">Favorite activities:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Hiking", "Kayaking", "Photography", "Camping"].map((item, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="w-full md:w-1/2 aspect-[1] rounded-2xl overflow-hidden group relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
              <span className="text-white text-lg font-medium">Exploring Wasaga Beach</span>
            </div>
            <div className="absolute inset-0 border border-emerald-500/30 rounded-2xl pointer-events-none"></div>
            <motion.div 
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="/wasaga.jpeg" 
                alt="Hiking" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Block 3: Adventures */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl w-full mb-20">
          <motion.div
            className="w-full md:w-1/2 aspect-[3/4] rounded-2xl overflow-hidden group relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
              <span className="text-white text-lg font-medium">Concert Experience</span>
            </div>
            <div className="absolute inset-0 border border-purple-500/30 rounded-2xl pointer-events-none"></div>
            <motion.div 
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="Kartik.jpeg" 
                alt="Concert" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="w-full md:w-1/2 space-y-6 p-8 rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                <FaMusic className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold">Adventures and Shows</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I love attending concerts and local events. There's nothing like the energy of live music to fuel creativity and community.
            </p>
            <div className="pt-4 mt-4 border-t border-white/10">
              <span className="text-sm text-purple-400 font-medium">Recent experiences:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Live Music", "Tech Meetups", "Local Festivals", "Community Events"].map((item, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Block 4: Tech & Clubs */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-6xl w-full">
          <motion.div
            className="w-full md:w-1/2 space-y-6 p-8 rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
                <FaUsers className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold">Tech & Clubs</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm actively involved in tech clubs like the CS Hub at York University — collaborating, learning, and leading community events.
            </p>
            <div className="pt-4 mt-4 border-t border-white/10">
              <span className="text-sm text-blue-400 font-medium">Community involvement:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["CS Hub", "Tech Workshops", "Hackathons", "Peer Mentoring"].map((item, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="w-full md:w-1/2 aspect-[3/4] rounded-2xl overflow-hidden group relative flex items-center justify-center bg-gray-800/30"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
              <span className="text-white text-lg font-medium">CS Hub Community</span>
            </div>
            <div className="absolute inset-0 border border-blue-500/30 rounded-2xl pointer-events-none"></div>
            <motion.div 
              className="w-4/5 h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src="CS.png" 
                alt="CS Hub" 
                className="w-full h-auto object-contain" 
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Info;