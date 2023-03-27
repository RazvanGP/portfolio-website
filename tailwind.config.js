/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        colorWhite: "#F6EFEE",
        colorLightBlue: "#8d99ae",
        colorBlue: "#457b9d",
        colorDarkBlue: "#2b2d42",
        colorAccentBlue: "#48cae4",
      },
      blur: {
        xs: "2px",
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
      pills: "fadeInFadeOut 20s alternate infinite",
    },
    keyframes: {
      random: {
        "0%": { transform: "scale(1)" },
        "25%": { transform: "rotate(45deg)" },
        "50%": { transform: "scale(1.3)" },
        "75%": { transform: "rotate(-90deg)" },
        "100%": { transform: "scale(1)" },
      },
      // fadeInFadeOut: {
      //   // "0%": { transform: "translateY(100%)", opacity: "0" },
      //   // "50%": { opacity: "1" },
      //   // "100%": { transform: "translateY(-100%)", opacity: "0" },

      //   "0%": { transform: "translateY(500%)", opacity: "0" },
      //   "50%": { transform: "translateY(50%)", opacity: "1" },
      //   "60%": { transform: "translateY(55%) scale(1.2)", opacity: "1" },
      //   "100%": { transform: "translateY(-500%)", opacity: "0" },
      // },
    },
  },
  plugins: [],
};
