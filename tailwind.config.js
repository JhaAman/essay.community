module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#171616",
        primary: {
          DEFAULT: "#FF4741",
          50: "#FFF9F9",
          100: "#FFE5E4",
          200: "#FFBEBB",
          300: "#FF9693",
          400: "#FF6F6A",
          500: "#FF4741",
          600: "#FF1109",
          700: "#D00700",
          800: "#980500",
          900: "#600300",
        },
      },
      fontFamily: {
        sans: ["'Avenir Next'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
