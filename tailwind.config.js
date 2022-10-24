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
