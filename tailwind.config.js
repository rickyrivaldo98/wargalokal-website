module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
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
