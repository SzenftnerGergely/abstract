/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        blue: "#4c5fd5",
        grey: "#191a1b",
        light_grey: "#dadbf1",
    },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      }
    },
  },
  plugins: [],
}
