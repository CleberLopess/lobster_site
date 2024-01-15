/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    important: true,
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
      1: "2",
      1: "3",
      1: "4",
      1: "5",
      1: "6",
      1: "7",
      1: "8",
      1: "9",
    },
  },
  plugins: [],
};
