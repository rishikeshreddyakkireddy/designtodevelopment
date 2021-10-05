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
      screens: {
        'laptop': {'min': '1250px', 'max': '1279px'},
        'miniLaptop': {'min': '1070px', 'max': '1249px'},
        'lgLaptop': {'min': '1536px', 'max': '1624px'},
        'xlLaptop': {'min': '1625px', 'max': '1880px'}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
