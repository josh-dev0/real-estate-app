/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        online: "var(--theme-color-bg-green)",
      },
      colors: {},
      fontSize: {
        sm: [
          "0.875rem",
          {
            lineHeight: "1.375rem",
          },
        ],
      },
      textColor: {
        secondary: "var(theme-color-text-secondary)",
      },
    },
  },
  plugins: [],
};
