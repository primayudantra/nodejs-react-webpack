var webpack = require('webpack');

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
      new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.js$/, //regex
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            // Compile JSX to JS
            // Compile ES6 to JS
            // HMRE = Hot Module Reloading Error Handling
            presets:[
              'react',
              'es2015',
              'react-hmre'
            ]
          }
        }
      ]
    }
}
