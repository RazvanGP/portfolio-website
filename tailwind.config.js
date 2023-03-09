/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
  },
  plugins: [],
};
