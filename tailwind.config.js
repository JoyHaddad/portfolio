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
        "joy-bg": "url('/public/hello-bg.png')",
      },
    },
  },
  plugins: [],
};
