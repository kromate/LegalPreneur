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
				dark:'#142F4E'
			},
			boxShadow: {
				block: '0 20px rgba(0,0,0,0.8)',
			},
		},
	},
	plugins: [],
}
