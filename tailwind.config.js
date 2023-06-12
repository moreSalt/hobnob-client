/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "color-scheme": "dark",

                    primary: "#38BDF8",

                    secondary: "#818CF8",

                    accent: "#F471B5",
                    "base-100": "#000000",
                    "base-200": "#0D0D0D",
                    "base-300": "#1A1919",
                    neutral: "#272626",
                    "neutral-focus": "#343232",

                    info: "#0CA5E9",

                    success: "#2DD4BF",

                    warning: "#F4BF50",

                    error: "#FB7085",
                },
            },
            "light",
            "dark"
        ],
    },
    plugins: [require("daisyui"), require('@tailwindcss/line-clamp')],
};
