module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        background: "#F1EEEA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
