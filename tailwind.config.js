/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.06)',
      },
      colors: {
        'soft-black': '#0f0f0f',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        fancy: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.glass-container': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '1.5rem',
          boxShadow: `
            inset 0 0 30px rgba(255, 255, 255, 0.05),
            0 10px 25px rgba(0, 0, 0, 0.1),
            0 0 60px rgba(255, 255, 255, 0.05)
          `,
        },
      });
    },
  ],
}
