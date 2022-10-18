/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        secondary: "var(theme-color-text-secondary)",
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
    },
  },
  plugins: [],
};
