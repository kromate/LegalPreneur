module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				primary: '#009CE3',
				dark: '#142F4E',
				blue:'#F6F9FF'
			},
			boxShadow: {
				block: '0px 6.96864px 27.8746px rgba(0, 0, 0, 0.05)',
			},
		},
	},
	plugins: [],
}
