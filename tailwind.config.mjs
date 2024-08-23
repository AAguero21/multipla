/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      },
      esmerald:{
        50:"#ecfdf5",
        100:"#d1fae5",
        200:"#a7f3d0",
        300:"#6ee7b7",
        400:"#34d399",
        500:"#65B22C",
        600:"#059669",
        700:"#047857",
        800:"#065f46",
        900:"#064e3b",
        950:"#022c22"
      },
      rucso:{
        100:"#BABCE7",
        200:"#A3B0E4",
        300:"#8FA3CB",
        400:"#698999",
        500: "#567C7F"
      }, 
      emerald: {
          100: "#e0f0d5",
          200: "#c1e0ab",
          300: "#a3d180",
          400: "#84c156",
          500: "#65b22c",
          600: "#518e23",
          700: "#3d6b1a",
          800: "#284712",
          900: "#142409"
},// Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        // Puedes agregar más animaciones aquí
      },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
