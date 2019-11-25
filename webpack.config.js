const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractLoader = require('mini-css-extract-plugin');

module.exports = {

  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      'pg': path.resolve(__dirname, 'src/pages'),
      'cmp': path.resolve(__dirname, 'src/components'),
      'act': path.resolve(__dirname, 'src/actions'),
      'rd': path.resolve(__dirname, 'src/reducers'),
      'api': path.resolve(__dirname, 'src/api'),
      'sg': path.resolve(__dirname, 'src/sagas'),
      'serv': path.resolve(__dirname, 'src/services'),
      'libs': path.resolve(__dirname, 'src/libs'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractLoader.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    // inline: false,

    port: 3000, 
    proxy: {
      '/api/**': {
        target: 'http://localhost:8099',
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new MiniCssExtractLoader({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '', 'index.html'),
      filename: 'index.html',
      stats: { children: false }
    }),
  ],
}