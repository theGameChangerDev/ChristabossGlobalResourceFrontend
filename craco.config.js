module.exports = {
  style: {
    postcss: {
      loaderOptions: {
        // This fixes the "plugins is not a function" error
        postcssOptions: {
          plugins: [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
          ],
        },
      },
    },
  },
};