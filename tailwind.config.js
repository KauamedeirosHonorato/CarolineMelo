/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rose-gold": {
          DEFAULT: "#e35336",
          hover: "#e35336cc",
        },
        nude: {
          light: "#F7EFEA", // Fundo geral
          deep: "#E4C3B8",
        },
        gold: {
          opaque: "#6B4A3A", // Texto dourado escuro/bronze
        },
        graphite: "#111111",
        "gray-rose": "#E4C3B8",
        white: "#FFFFFF",
      },
      fontFamily: {
        // Serif para títulos elegantes
        serif: ['"Playfair Display"', "serif"],
        // Sans (Poppins) para textos de leitura
        sans: ['"Poppins"', "sans-serif"],
      },
      backgroundImage: {
        "luxury-gradient": "linear-gradient(135deg, #D88F7A, #C47863)",
      },
    },
  },
  plugins: [],
}
