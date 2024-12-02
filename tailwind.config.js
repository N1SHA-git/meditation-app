/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Alegrya: ["Alegreya", "sans-serif"],
        AlegryaSans: ["AlegreyaSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
