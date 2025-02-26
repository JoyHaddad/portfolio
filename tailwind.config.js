/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "#AD88C6",
        "custom-light": "#FFE6E6",
        "custom-dark": "#7469B6",
        "custom-pink": "#E1AFD1",
      },
      backgroundImage: {
        "hero-pattern": "url('/hello-bg.png')",
      },
      fontFamily: {
        fira: ['"Fira Mono"', "monospace"], // Define the Fira Mono font stack
      },
      spacing: {
        97: "388px", // Adding a custom spacing value for your specific use case
        82: "330px",
      },
    },
  },
  plugins: [],
};
