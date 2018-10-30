module.exports = {
  plugins: [
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
      stage: 0,
    }),
    require('postcss-font-magician')({
      variants: {
        'Pacifico': {
          300: ['woff, eot, woff2'],

        },
      },
    }),
  ],
};
