/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "primary-dark-cyan":"hsl(158, 36%, 37%)",
        "primary-cream":"hsl(30, 38%, 92%)",
        "neutral-very-dark-blue":"hsl(212, 21%, 14%)",
        "neutral-dark-grayish-blue":"hsl(228, 12%, 48%)"
      },fontFamily:{
        "sans":["Montserrat"],
        "serif":["Fraunces"]
      }
    },
  },
  plugins: [],
}

