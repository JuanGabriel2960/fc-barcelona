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
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
