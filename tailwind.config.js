/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#787486",
				background: "#F5F5F5",
				customBlack: "#0D062D",
				customPurple: "#5030E5",
				customGray: "#F5F5F5",
				"active-bg": "rgba(80, 48, 229, 0.08);",
			},
			spacing: {
				"30px": "30px",
				"20px": "20px",
				"22px": "22px",
				"10px": "10px",
				"38px": "38px",
				"88px": "88px",
			},
			width: {
				"250px": "250px",
			},
			borderWidth: {
				"3px": "3px",
			},
		},
	},
	plugins: [],
};
