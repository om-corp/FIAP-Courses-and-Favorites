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
            // Se localiza dentro de input.css, ao alterar, favor atualizar output.css
            heroBanner: "url('../Assets/background-fiap.png')"
        }
    },
    plugins: [],
}