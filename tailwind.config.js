/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      md: "768px",
      lg: "978px",
      xl: "1234px",
    },
    extend: {},
  },
  plugins: [],
};
