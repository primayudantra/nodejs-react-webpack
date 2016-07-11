var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map', //Not for production
    entry: [
      'webpack-hot-middleware/client',
      './client/client.js'
    ],
    output: {
      // path: './dist',
      path: require("path").resolve("./dist"),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins:[
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin('style.css',{allChunks: true})
    ],
    module: {
      loaders: [
        {
          // Loaders JS
          test: /\.js$/, //regex
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets:[
              'react',
              'es2015',
              'react-hmre'
            ]
          }
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }
      ]
    }
}
