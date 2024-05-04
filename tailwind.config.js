/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'header-hero': "url('/src/img/hh.png')"
      },
      colors:{
        'shop':'#E58411',
        'tab':'#F7F7F7',
        'brend':'#8D8D8D',
      },
      fontSize:{
        '80':'80px',
        '42':'42px',
      }
    },
  },
  plugins: [],
}