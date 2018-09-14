const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/t-app.js',
  output: {
    filename: 'src/t-app.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([ 'img/*','img/logo/*','index.html' ]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new InjectManifest({
      swSrc: './src/service-worker.js'
    })
  ]
};