/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./renderer/**/*.{vue,js,ts,jsx,tsx}",
  "./pages/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    colors: {
      primary: {
        light: "#c6ccb2",
        DEFAULT: "#093824",
        dark: "#062316",
      },
      secondary: {
        light: "#ef8354",
        DEFAULT: "#CE4B12",
        dark: "#CE4B12",
      },
      magnolia: {
        light: "#e4dee4",
        DEFAULT: "#443742",
        dark: "#2D242C",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
