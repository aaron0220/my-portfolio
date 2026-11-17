/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        drake: {
          bg: "#1f1f1f",
          card: "#1f1f1f",
          line: "#565656",
          muted: "#999999",
          accent: "#28e98c",
        },
        nav: "rgba(0,0,0,.95)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        nav: "1220px",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
      },
      keyframes: {
        rotating: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotating: "rotating 6s linear infinite",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  plugins: [],
};
