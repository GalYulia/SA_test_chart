const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

const postCssVar = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    config: {
      path: 'path/to/postcss.config.js',
    },
    plugins: () => [
      postcssPresetEnv(/* options */),
    ],
  },
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react-es2015', 'react', 'stage-2'],
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        exclude: '/src/styles/index.css',
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          postCssVar,
        ],
      },
      {
        test: /\.css$/,
        include: '/src/styles/',
        use: [MiniCssExtractPlugin.loader, 'css-loader', postCssVar],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './[name].css',
    }),
  ],

  /* devServer: {
    inline: true,
    contentBase: './dist',
    port: 5000,
  }, */
};
