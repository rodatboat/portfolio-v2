/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./renderer/**/*.{vue,js,ts,jsx,tsx}",
  "./pages/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    colors: {
      primary: {
        light:"#CFFF99",
        DEFAULT: "#B8FF65",
      },
      secondary: {
        DEFAULT: "#aaa",
      },
      white: {
        DEFAULT: "#fff",
      },
      black: {
        DEFAULT: "#000",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Larsseit-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
