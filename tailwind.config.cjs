/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	prefix:"tw-",
	corePlugins: {
		preflight: false,
	},
	darkMode : "selector",
	important:true,
	variants: {
		extend: {
		  textColor: ['hover', 'dark'],
		  backgroundColor: ['hover', 'dark'],
		},
	  },
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
		backgroundColor:{
			dark : "#0e1016",
		  },
		  textColor:{
			darkHeading : "#F0F0F0",
			darkPara : "#c9c7c7",
			darkPara2 : "#B0B0B0"
		  }
		},
	},
	plugins: [],
}
