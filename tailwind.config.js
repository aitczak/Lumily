/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,ts,jsx,js}", "./index.html"], // Adjust based on your project
  theme: {
    extend: {
      colors: {
        maingradientstart: "#FFDA59",
        maingradientend: "#FE934C",
        cream: "#F7D7C3",
        darkblue: "#273555",
      },
    },
  },
  plugins: [], // Keep this as an empty array unless you add plugins
};


