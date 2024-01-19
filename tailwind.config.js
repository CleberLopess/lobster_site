/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[theme-mode="dark"]'],
  theme: {
    important: true,
    colors: {
      ...colors,
      light: {
        "bg-01": "#92C7CF",
        "bg-02": "#AAD7D9",
        "color-01": "#363062",
        "color-02": "#E5E1DA",
      },
      dark: {
        "bg-01": "#363062",
        "bg-02": "#435585",
        "color-01": "#BAC7EB",
        "color-02": "#F5E8C7",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      MuseoModerno: "MuseoModerno",
      Poppins: "Poppins",
    },
    zIndex: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
    },
  },
  plugins: [],
};
