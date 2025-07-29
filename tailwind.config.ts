import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

// /** @type {import('tailwindcss').Config} */

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
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
		heroui({
			themes: {
				light: {
					colors: {
						primary: "#33FF00",
					},
				},
				dark: {
					colors: {
						primary: "#33FF00",
					},
				},
			},
		}),
	],
};

export default config;
