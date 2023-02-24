/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'darkbrowngray': '#625d50',
      'darktealgreen': '#347d75',
      'copper': '#c66218',
      'lightmochabeige': '#cbb69c',
      'lightpeach': '#fee7da',
      'oldgold': '#e5ce97',
      'offwhite': '#fcfcee',
      'white': '#ffffff',
      'black': '#000000',
      'blackbrown': '#1e1108'
    },
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