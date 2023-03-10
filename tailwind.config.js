/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        //light
        bgPrimaryLight: "#f1faee",
        bgSecondaryLight: "#8d99ae",
        bgTertiaryLight: "#457b9d",
        textPrimaryLight: "#2b2d42",
        //dark
        bgPrimaryDark: "#1d3557",
        bgSecondaryDark: "#8d99ae",
        bgTertiaryDark: "#48cae4",
        textPrimaryDark: "#f1faee",
      },
    },
    fontFamily: {
      logo: ["Dancing Script", "cursive"],
      primary: ["Orbitron", "sans-serif"],
      secondary: ["Rajdhani", "sans-serif"],
      tertiary: ["Aldrich", "sans-serif"],
    },
  },
  plugins: [],
};
