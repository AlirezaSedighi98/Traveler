/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      base: "26px",
      xl: "32px",
    },
    extend: {
      fontFamily: {
        sans: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
