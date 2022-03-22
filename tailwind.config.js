module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#171616",
        primary: "#FF4741",
      },
      fontFamily: {
        sans: ["'Avenir Next'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
