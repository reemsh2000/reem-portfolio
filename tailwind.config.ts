import type { Config } from "tailwindcss";

// /** @type {import('tailwindcss').Config} */

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					light: "#fdc435",
					dark: "#ce9000",
				},
				text: {
					light: "#1a1a1a",
					dark: "#f1f1f1",
				},
				background: {
					light: "#ffffff",
					dark: "#0d0d0d",
				},
			},
		},
	},
	darkMode: "class",
	plugins: [
		
	],
};

export default config;
