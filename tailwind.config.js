/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily:{
      'navbar':["Raleway"],
      'primary':["Montserrat","Inter"],
      'secondary':["inter"]
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        }, 
      }, ['responsive']);
    }
  ],
}