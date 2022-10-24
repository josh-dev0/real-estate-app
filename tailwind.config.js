/** @type {import('tailwindcss').Config} */

const backgroundColor = {
  primary: "var(--theme-color-bg-primary)",
  secondary: {
    DEFAULT: "var(--theme-color-bg-secondary)",
    light: "var(--theme-color-bg-secondary-light)",
    focused: "var(--theme-color-bg-focused)",
  },
};

const textColor = {
  primary: "var(--theme-color-fg-primary)",
  secondary: {
    DEFAULT: "var(--theme-color-fg-secondary)",
    1: "var(--theme-color-fg-secondary-1)",
  },
  icon: "var(--theme-color-fg-icon)",
};

module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor,
      colors: {
        bg: backgroundColor,
        fg: textColor,
      },
      fontSize: {
        sm: [
          "0.875rem",
          {
            lineHeight: "1.375rem",
          },
        ],
      },
      textColor,
      boxShadow: {
        el: "0px 1px 12px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
