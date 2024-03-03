/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        blue: "#3B82F6",
        "light-blue": "#DBEAFE",
        primarygrey: "#666D80",
        secondarygrey: "#DFE1E7",
        offWhite: "#F9FAFB"
      }
    }
  }
}
