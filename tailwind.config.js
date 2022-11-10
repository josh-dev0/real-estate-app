/** @type {import('tailwindcss').Config} */

const backgroundColor = {
  primary: "var(--theme-color-bg-primary)",
  secondary: {
    DEFAULT: "var(--theme-color-bg-secondary)",
    dark: "var(--theme-color-bg-secondary-dark)",
    light: "var(--theme-color-bg-secondary-light)",
    focused: "var(--theme-color-bg-focused)",
    1: "var(--theme-color-bg-secondary-1)",
    2: "var(--theme-color-bg-secondary-2)",
    3: "var(--theme-color-bg-secondary-3)",
    4: "var(--theme-color-bg-secondary-4)",
  },
};

const textColor = {
  primary: "var(--theme-color-fg-primary)",
  secondary: {
    DEFAULT: "var(--theme-color-fg-secondary)",
    light: "var(--theme-color-fg-secondary-light)",
    1: "var(--theme-color-fg-secondary-1)",
    2: "var(--theme-color-fg-secondary-2)",
    3: "var(--theme-color-fg-secondary-3)",
    4: "var(--theme-color-fg-secondary-4)",
    5: "var(--theme-color-fg-secondary-5)",
    6: "var(--theme-color-fg-secondary-6)",
    7: "var(--theme-color-fg-secondary-7)",
  },
  tab: {
    DEFAULT: "var(--theme-color-fg-tab)",
  },
  icon: {
    DEFAULT: "var(--theme-color-fg-icon)",
    1: "var(--theme-color-fg-icon-1)",
    2: "var(--theme-color-fg-icon-2)",
  },
  shadow: {
    DEFAULT: "var(--theme-color-fg-shadow)",
    1: "var(--theme-color-fg-shadow-1)",
    2: "var(--theme-color-fg-shadow-2)",
    3: "var(--theme-color-fg-shadow-3)",
  },
  error: "var(--theme-color-fg-error)",
};

module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor,
      boxShadow: {
        el: "0px 1px 12px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        bg: backgroundColor,
        fg: textColor,
      },
      fontSize: {
        "2xs": ".625rem", //  10px
        xs: ".75rem", //     12px
        sm: ".875rem", //    14px
        base: "1rem", //     16px
        lg: "1.125rem", //   18px
        xl: "1.25rem", //    20px
        "2xl": "1.5rem", //  24px
        "3xl": "1.75rem", // 28px
        "4xl": "2.5rem", //  40px
        "5xl": "3.25rem", // 52px
      },
      lineHeight: {
        "2xs": ".625rem", //  10px
        xs: ".75rem", //     12px
        sm: ".875rem", //    14px
        base: "1rem", //     16px
        lg: "1.125rem", //   18px
        xl: "1.25rem", //    20px
        "2xl": "1.5rem", //  24px
        "3xl": "1.75rem", // 28px
        "4xl": "2.5rem", //  40px
        "5xl": "3.25rem", // 52px
      },
      textColor,
    },
  },
  plugins: [],
};
