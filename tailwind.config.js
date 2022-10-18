/** @type {import('tailwindcss').Config} */

function withOpacity(cssVariable) {
  return ({ opacityValue }) => {
    return opacityValue
      ? `rgba(var(${cssVariable}), ${opacityValue})`
      : `rgb(var(${cssVariable}))`;
  };
}

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#365272",
        greene: withOpacity("--color-greene"), // option for the theme test
      },
    },
  },
  plugins: [],
};
