/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#070022",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      heading: ["Evermore", "sans-serif"],
    },
  },
  plugins: [],
};
