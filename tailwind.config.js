/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        colors: {
            primary: `#e6e6e6`,
            secondary: `#09090c`,
            tertiary: `#ED145B`,
            accent: `#f3f3f3`
        },
        backgroundImage: {
            heroBanner: "url('../../public/background-fiap.png')"
        }
    },
    plugins: [],
}