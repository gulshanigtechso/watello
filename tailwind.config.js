/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#fcf2ec",
        bgColor2: "#f9f9f9",
        bgBtnColor: "#fad613",
        textColor1: "#124942",
        textColor2: "#021108",
        textColor3: "#fd833c",
      },
      container: {
        center: true,
        padding: "0.75rem",
      },
    },
  },
  plugins: [],
};
