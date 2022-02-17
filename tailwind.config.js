module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "color-gray": "#FAFDFB",
      primary: "#1E9F78",
    }),
    extend: {
      colors: {
        green: {
          light: "#38B000",
          dark: "#008000",
          nav: "#329532",
          navdark: "#216121",
          primary: "#1E9F78",
          lightPrimary: "#34BA92",
        },
        yellow: {
          primary: "#FEC85B",
          light: "#FFF1D5",
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
