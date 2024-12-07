/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/uikit/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/icons/**/*.{js,ts,jsx,tsx,mdx}",
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
