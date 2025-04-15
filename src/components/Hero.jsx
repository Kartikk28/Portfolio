import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-[#111111] to-black text-white flex items-center justify-center px-6 pt-28">
      <div className="relative w-full h-[92vh] max-w-[95rem] px-10 md:px-20 py-24 bg-[#0b0b0b] border-[8.5px] border-[#3a3a3a] rounded-[28px] shadow-[0_0_80px_rgba(0,0,0,0.1)] shadow-inner backdrop-blur-lg overflow-hidden">

        {/* Mac Window Dots */}
        <div className="absolute top-6 left-6 flex space-x-2 z-10">
          <span className="w-3 h-3 bg-red-500 rounded-full border border-red-900" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full border border-yellow-800" />
          <span className="w-3 h-3 bg-green-500 rounded-full border border-green-800" />
        </div>

        {/* Gray Top Gloss Effect */}
        <div className="absolute top-[3px] left-0 w-full h-14 rounded-t-[28px] bg-gradient-to-b from-white/10 to-transparent z-0" />

        {/* Diagonal Beam Gloss */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[36px] left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.07),_transparent)] blur-2xl opacity-50 rotate-6" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center items-start text-left h-full">
          <motion.h1
            className="text-[5.2rem] sm:text-[6rem] font-bold text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Kartik.
          </motion.h1>

          <motion.h2
            className="mt-6 text-[4rem] sm:text-[4.8rem] italic font-fancy drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)] leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I like to <span className="text-white">build things.</span>
          </motion.h2>
        </div>

        {/* Role Description */}
        <div className="absolute bottom-8 right-8 text-right text-base sm:text-lg text-white/80">
          <p className="font-semibold">Software Engineering Student</p>
          <p className="text-white/40">Based in Toronto.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
