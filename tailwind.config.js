/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: {
        light: "#F5AD8F",
        DEFAULT: "#ef8354",
        dark: "#CE4B12",
      },
      green: {
        light: "#c6ccb2",
        DEFAULT: "#093824",
        dark: "#062316",
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
