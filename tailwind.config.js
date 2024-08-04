/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "robo-fonts": "Roboto Slab",
    },
    colors: {
      "theme-background-color": "#1d1d1d",
      "theme-main-color": "#ffdd40",
      "theme-sub-text-color": "#fff",
      "theme-nav-background-color": "#181818",
      "theme-bg-transparent":"transparent"
    },
    extend: {
      animation: {
        typewriter: "typewriter 10s steps(40) forwards"
      },
      keyframes: {
        typewriter: {
          from: { left: 0 },
          to: { left: "100%"},
        }
      }

    },
  },
  plugins: [],
}