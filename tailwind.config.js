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
        primary: "var(--theme-color-bg-primary)",
        secondary: "var(--theme-color-bg-secondary)",
        secondaryLight: "var(--theme-color-bg-secondary-light)",
      },
      colors: {
        textPrimary: "var(--theme-color-text-primary)",
        bgSecondaryLight: "var(--theme-color-bg-secondary-light)",
      },
      fontSize: {
        sm: [
          "0.875rem",
          {
            lineHeight: "1.375rem",
          },
        ],
      },
      textColor: {
        primary: "var(--theme-color-text-primary)",
        secondary: "var(--theme-color-text-secondary)",
        secondaryLight: "var(--theme-color-text-secondary-light)",
      },
    },
  },
  plugins: [],
};
