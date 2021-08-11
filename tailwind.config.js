const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({addComponents}){
      const buttons = {
        '.btn-red': {
          padding: '0.25rem 1rem 0.5rem 1rem',
          borderRadius: '0.25rem',
          fontWeight: '600',
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          }
        }
      }

      addComponents(buttons);
    })
  ],
}
