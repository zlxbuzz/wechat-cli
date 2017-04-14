var {resolve} = require('path');

module.exports = {
  entry: resolve(__dirname,'..','src/app'),
  output: {
    path: resolve(__dirname,'..','dist'),
    publicPath:'/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test:/.js$/,
        loader:'babel-loader',
      }
    ]
  },
  resolve: {
    extensions:['.js','.json']
  }
}
