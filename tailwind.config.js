module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "color-gray": "#FAFDFB",
      primary: "#008000",
    }),
    extend: {
      colors: {
        green: {
          light: "#38B000",
          dark: "#008000",
          nav: "#329532",
          navdark: "#216121",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
