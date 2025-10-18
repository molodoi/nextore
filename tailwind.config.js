module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./assets/styles/**/*.{css,scss}", // add your CSS here if needed
    ],
    theme: {
        extend: {
            animation: {
                fade: "fadeIn 1s ease-in-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
        },
    },
    plugins: [require("tw-animate")],
};
