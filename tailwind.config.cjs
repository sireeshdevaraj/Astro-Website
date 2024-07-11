/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	prefix:"tw-",
	corePlugins: {
		preflight: false,
	},
	darkMode : "selector",
	important:true,
	theme: {
		extend: {
			screens:{
				mobile:"370px",
				tablet:"640px",
				desktop:"1024px"
			},
		fontFamily: {
			sans: ['Inter var'],
			berkeley : ['Berkeley']
		  },
		},
	},
	plugins: [],
}
