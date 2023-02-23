/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minWidth: {
      420: "420px",
      320: "320px",
    },
    maxHeight: {
      69: "69px",
    },
    screens: {
      xs: "300px",
      sm: "600px",
      smd: "900px",
      md: "1200px",
      lg: "1500px",
      xl: "1800px",
    },
    extend: {
      fontFamily: {
        "public-sans": "Public Sans",
        labelle: "La Belle Aurore",
      },
    },
  },
  plugins: [],
};