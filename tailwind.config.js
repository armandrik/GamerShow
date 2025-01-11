/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "main": "#1f2128",
        "primary": "#6C5DD3",
        "secondary" : "#242731",
        "font" : "#FF754C"
      },
      screens: {
        'tv': { 'max': '1536px' }, // Applies styles below 1536px
        'desktop': { 'max': '1200px' }, // Applies styles below 1200px
        'tablet-lg': { 'max': '1000px' }, // Applies styles below 1000px
        'tablet': { 'max': '860px' }, // Applies styles below 860px
        'mobile': { 'max': '640px' }, // Applies styles below 640px
        'small': { 'max': '480px' }, // Applies styles below 480px
      },
      boxShadow: {
        'card': '0px 35px 55px 0px #FF754C',
        "articel" : "inset 0px -455px 460px -210px #000000ba;"
      },
    },
  },
  plugins: [],
}
