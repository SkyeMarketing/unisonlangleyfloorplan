/**
 * @type {import("tailwindcss").Config}
 */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    corePlugins: {
        aspectRatio: false,
    },
    theme: {
        extend: {
            width: {
                "41": "10.25rem",
            },
            colors: {
                white: "hsl(0,0%,100%)",
                grey: "hsl(0,0%,81%)",
                black: "hsl(0,0%,0%)",
                aqua: "hsl(186,85%,35%)",
                sea: "hsl(180,67%,45%)",
            },
            fontFamily: {
                serifCaps: ["Cinzel", "serif"],
                serif: ["Frank Ruhl Libre", "serif"],
            },
            aspectRatio: {

            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ]
}