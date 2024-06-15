// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./index.html",
    "./src/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      
    },
  },
  darkMode: "class",
  plugins: [nextui({})],
};