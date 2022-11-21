/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'hero-pattern': "url('/img/pipes.png')"
            }),
            animation: {
                'ltr-linear-infinite': 'ltr-linear-infinite 100s linear infinite'
            },
            keyframes: {
                'ltr-linear-infinite': {
                    from: { 'background-position': '0 0' },
                    to: { 'background-position': '400% 0%' }
                }
            },
            colors: {
                'light-blue': colors.sky,
                cyan: colors.cyan
            }
        },
    },
    plugins: [],
}
