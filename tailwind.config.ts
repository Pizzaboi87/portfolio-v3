import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				pearl: "#fdfdff"
			},
			screens: {
				xs: "400px",
				ms: "460px",
			},
			fontFamily: {
				title: ['var(--font-geologica)'],
				display: ['var(--font-manrope)'],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;