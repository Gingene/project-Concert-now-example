/** @type {import('tailwindcss').Config} */
// import colors from "tailwindcss/colors";
// import plugin from "tailwindcss/plugin";
const plugin = require("tailwindcss/plugin");
const { btn, card } = require("./src/assets/tailwind");
// import { btn } from "./src/assets/tailwind";
// const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Noto Sans TC", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme, addComponents }) {
      addBase({
        "*": { lineHeight: 1.5 },
        h1: { fontSize: theme("fontSize.3xl"), fontWeight: theme("fontWeight.bold"), lineHeight: 1.2 },
        h2: { fontSize: theme("fontSize.2xl"), fontWeight: theme("fontWeight.bold"), lineHeight: 1.2 },
        h3: { fontSize: theme("fontSize.xl"), fontWeight: theme("fontWeight.bold"), lineHeight: 1.2 },
        h4: { fontSize: theme("fontSize.lg"), fontWeight: theme("fontWeight.bold"), lineHeight: 1.2 },
        h5: { fontWeight: theme("fontWeight.bold"), lineHeight: 1.2 },
        h6: { fontWeight: theme("fontWeight.bold"), lineHeight: 1.2 },
      });
      addComponents({
        ...btn,
        ...card,
      });
    }),
  ],
};
