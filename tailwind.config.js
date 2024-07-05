/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".blur-220": {
          filter: "blur(220px)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
}