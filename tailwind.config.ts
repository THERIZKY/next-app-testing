import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				linear_gradient_navbar: `linear-gradient( 90deg, rgba(2, 0, 36, 0.9) 0%, rgba(9, 9, 121, 0.502) 100%);`,
				linear_gradient_About: `linear-gradient(90deg,rgba(2, 0, 36, 1) 20%,rgba(9, 9, 121, 0.21052170868347342) 100%);`,
			},
			fontFamily: {
				defaultFonts: "Comfortaa, Helvetica, sans-serif",
				headerFonts: "Roboto, cursive, sans-serif",
			},
			width: {
				"15rem": "15rem",
				"20rem": "20rem",
				"35rem": "37rem",
			},
			maxWidth: {
				xxs: "15rem",
			},
			backgroundColor: {
				transparan: "rgba(0,0,0,0.7)",
			},
		},
	},
	plugins: [],
};
export default config;
