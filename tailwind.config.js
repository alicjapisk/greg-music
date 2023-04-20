/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'background':"url('../img/background.jpg')",
        'background2':"url('../img/background2.jpg')",
        'background3':"url('../img/background3.jpg')",
      },
      spacing: {
        '128': '74rem',
        '112': '28rem',
        '114': '43rem',
      },
    },
  },
  plugins: []
}