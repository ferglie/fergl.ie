/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: () => ({
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
			}
		}
	},
	plugins: []
};
