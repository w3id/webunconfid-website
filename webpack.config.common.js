const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/t-app.js',
    output: {
        filename: 'src/t-app.js',
        path: path.resolve(__dirname, 'dist')
      },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['*', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([ 
        'img/*',
        'img/logo/*',
        'img/favicon/*',
        'img/photo/*',
        'index.html',
        'manifest.json',
        'favicon.ico',
        'node_modules/milligram/dist/*',
        'data/*.json'
      ]),
      new InjectManifest({
        swSrc: './src/service-worker.js',
        importWorkboxFrom:'local'
      })
    ]
  };
