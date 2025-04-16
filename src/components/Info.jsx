import { motion } from "framer-motion";

function Info() {
  return (
    <section
      id="info"
      className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center gap-20 mb-0 overflow-hidden"
    >
     <motion.h2
  className="text-5xl font-bold text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, type: "spring", stiffness: 80 }}
>
  <span className="text-gray-400">About</span> <span className="italic">Me</span>
</motion.h2>




      {/* Block 1: Profile Picture */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl w-full">
        <motion.div
          className="w-full md:w-1/2 aspect-[3/4] rounded-xl overflow-hidden border-4 border-gray-600 shadow-lg transition-transform duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <img src="First.jpeg" alt="Me" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold">Who I Am</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            I'm Kartik, a Software Engineering student who enjoys building sleek, efficient, and meaningful tools. I love turning ideas into digital products and always look for projects that help people in real ways.
          </p>
        </motion.div>
      </div>

      {/* Block 2: Free Time */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 max-w-6xl w-full">
        <motion.div
          className="w-full md:w-1/2 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold">In My Free Time</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            I enjoy hiking, kayaking, and exploring the outdoors. Nature recharges me and gives me clarity to come back to code with fresh ideas.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 aspect-[1] rounded-xl overflow-hidden border-4 border-gray-600 shadow-lg transition-transform duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <img src="/wasaga.jpeg" alt="Hiking" className="w-full h-[550px] object-cover" />
        </motion.div>
      </div>

      {/* Block 3: Adventures */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl w-full">
        <motion.div
          className="w-full md:w-1/2 aspect-[3/4] rounded-xl overflow-hidden border-4 border-gray-600 shadow-lg transition-transform duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <img src="Kartik.jpeg" alt="Concert" className="w-full h-[720px] object-cover" />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold">Adventures and Shows</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            I love attending concerts and local events. There’s nothing like the energy of live music to fuel creativity and community.
          </p>
        </motion.div>
      </div>

      {/* Block 4: Tech & Clubs */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 max-w-4xl w-2xl">
        <motion.div
          className="w-full md:w-1/2 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold">Tech & Clubs</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            I'm actively involved in tech clubs like the CS Hub at York University — collaborating, learning, and leading community events.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 aspect-[3/4] rounded-xl overflow-hidden border-4 border-gray-600 shadow-lg transition-transform duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <img src="CS.png" alt="CS Hub" className="w-full h-[500px] object-contain" />
        </motion.div>
      </div>

      <p className="text-gray-400 mt-16 text-center text-sm italic">
        Thanks for scrolling! Let’s build something cool together ✨
      </p>
    </section>
  );
}

export default Info;
