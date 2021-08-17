module.exports = {
  // purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "color-gray": "#FAFDFB",
      primary: "#008000",
    }),
    extend: {
      colors: {
        green: {
          light: '#38B000',
          dark: '#008000'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
