/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // make sure it points to your src files
  theme: {
    extend: {
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-100%)" },
          "60%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.5s forwards",
      },
    },
  },
  plugins: [],
};
