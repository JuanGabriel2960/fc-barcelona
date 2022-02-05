const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'fc-yellow': '#fcc52c',
          'light-gray': '#e7e8eb',
          'bold-gray': '#d7d9df',
          'text-gray': '#bcc5cf',
          'light-blue': '#20428c',
          'bold-blue': '#06172a',
          'bold-dark': '#181a1b',
          'medium-dark': '#242729',
          'light-dark': '#2c3032',
        },
        spacing: {
          '128': '38rem',
          '160': '48rem',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
