/** @type {import('tailwindcss').Config}
 *
 */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          50: "#061409",
          100: "#0c2712",
          200: "#184e24",
          300: "#247536",
          400: "#309c47",
          500: "#3cc359",
          600: "#63cf7a",
          700: "#8adb9c",
          800: "#b1e7bd",
          900: "#d8f3de",
          950: "#ebf9ee",
        },
        background: {
          50: "#041508",
          100: "#082b11",
          200: "#115522",
          300: "#198033",
          400: "#22aa44",
          500: "#2ad555",
          600: "#55dd77",
          700: "#7fe699",
          800: "#aaeebb",
          900: "#d4f7dd",
          950: "#eafbee",
        },
        primary: {
          50: "#06140a",
          100: "#0b2813",
          200: "#165027",
          300: "#22773a",
          400: "#2d9f4d",
          500: "#38c761",
          600: "#60d280",
          700: "#88dda0",
          800: "#afe9c0",
          900: "#d7f4df",
          950: "#ebf9ef",
        },
        secondary: {
          50: "#061414",
          100: "#0b2827",
          200: "#16504f",
          300: "#227776",
          400: "#2d9f9d",
          500: "#38c7c5",
          600: "#60d2d0",
          700: "#88dddc",
          800: "#afe9e8",
          900: "#d7f4f3",
          950: "#ebf9f9",
        },
        accent: {
          50: "#021708",
          100: "#042f10",
          200: "#085e20",
          300: "#0c8d31",
          400: "#10bc41",
          500: "#14eb51",
          600: "#43ef74",
          700: "#72f397",
          800: "#a1f7b9",
          900: "#d0fbdc",
          950: "#e8fdee",
        },
      },

      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Poppins",
        body: "Commissioner",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
});
