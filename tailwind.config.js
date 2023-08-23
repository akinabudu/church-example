module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          700: "#595959",
          800: "#433e3d",
          900: "#141829",
          "900_01": "#121212",
        },
        black: { 900: "#000000", "900_01": "#0e0e0e" },
        blue_gray: { 100: "#d9d9d9", 700: "#4c4f5c" },
        white: { A700: "#ffffff" },
        orange: { 100: "#ffd1a3" },
      },
      fontFamily: {
        inter: "Inter",
        consolas: "Consolas",
        robotocondensed: "Roboto Condensed",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
