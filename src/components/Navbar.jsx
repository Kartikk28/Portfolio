import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-5 mr-5 ml-20 z-50 w-[92%] max-w-[95rem]">
      <nav
      
        className="relative flex items-center justify-between px-25 py-1 ]"
      >
        {/* 👤 Logo + Name */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-12 h-19" />
          <div className="text-white">
            <h1 className="font-semibold text-sm sm:text-base">Kartik Sharma</h1>
            <p className="text-gray-400 text-xs hidden sm:block">
              Software Engineering Student
            </p>
          </div>
        </div>

        {/* 🧭 Center Nav - Explicit Centering */}
        <div className="flex items-center space-x-6 text-sm font-medium text-white/80">
          <div className="flex items-center space-x-6 bg-white/10 px-6 py-1 rounded-full border border-white/10">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#work" className="hover:text-white transition">
              Work
            </a>
            <a href="#info" className="hover:text-white transition">
              Info
            </a>
          </div>
        </div>

        {/* 🔗 Socials */}
        <div className="flex items-center space-x-4 text-sm font-medium text-white/80">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/erks/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn ↗
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Resume ↗
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;