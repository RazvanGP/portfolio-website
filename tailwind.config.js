/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        colorWhite: "rgb(246 239 238)",
        colorLightBlue: "#8d99ae",
        colorBlue: "#457b9d",
        colorDarkBlue: "#2b2d42",
        colorAccentBlue: "#48cae4",
      },
    },
    fontFamily: {
      logo: ["Dancing Script", "cursive"],
      primary: ["Orbitron", "sans-serif"],
      secondary: ["Rajdhani", "sans-serif"],
      tertiary: ["Aldrich", "sans-serif"],
    },
    animation: {
      blob: "random 20s ease-in-out infinite",
    },
    keyframes: {
      random: {
        "0%": { transform: "scale(1)" },
        "25%": { transform: "rotate(45deg)" },
        "50%": { transform: "scale(1.3)" },
        "75%": { transform: "rotate(-90deg)" },
        "100%": { transform: "scale(1)" },
      },
    },
  },
  plugins: [],
};
