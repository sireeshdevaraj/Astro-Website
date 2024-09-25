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
			berkeley : ['Berkeley'],
			firacode : ['FiraCode'],
			sacramento: ["Sacramento", "sans"],
			sriracha : ["Sriracha, cursive", "sans"]
		  },
		backgroundColor:{
			dark : "#0e1016",
			dark2:"#12151c",
		  },
		  textColor:{
			darkHeading : "#F0F0F0",
			darkPara : "#c9c7c7",
			darkPara2 : "#B0B0B0",
			pink:"oklch(66.59% .3018840772950374 4.255646284110876/ 1)"
		  }
		},
	},
	plugins: [],
}
