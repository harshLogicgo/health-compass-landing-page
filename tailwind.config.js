/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 100%, 30%)",
        "primary-light": "hsl(var(--primary-light))",
        secondary: "hsl(var(--secondary))",
        "text-primary": "hsl(var(--text-primary))",
        "text-secondary": "hsl(var(--text-secondary))",
        "text-light": "hsl(var(--text-light))",
        "gray-blue": "#5d6481",
        "dark-teal-blue": "#03273C",
      },
      height: {
        hero: "calc(100vh - 125px)",
        "90vh": "90vh",
      },
      fontFamily: {
        alliance: ["Alliance", "serif"],
        mayfest: ["Mayfest", "serif"],
      },
    },
  },
  plugins: [],
};
