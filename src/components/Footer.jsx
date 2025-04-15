import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 mt-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo and Thanks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3">
            {/* You can replace this with your actual logo */}
            <img src="/logo.png" alt="Logo" className="w-12 h-19" />
          </div>
          <p className="text-sm text-gray-400">Kartik Sharma</p>
          <p className="text-xs text-gray-500 mt-1">Thanks for visiting!</p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm"
        >
          <h4 className="font-bold mb-3 text-gray-300">MAIN</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#info" className="hover:underline">Info</a></li>
          </ul>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm"
        >
          <h4 className="font-bold mb-3 text-gray-300">CONTACT</h4>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="https://github.com/Kartikk28" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/erks/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href="/KartikSharma_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Resume ↗
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-xs text-gray-500 mt-10">
        Last updated by Kartik on March 28, 2025 at 8:15 PM EDT
      </p>
    </footer>
  );
}

export default Footer;
