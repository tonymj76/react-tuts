const path = require('path');
module.exports = {
  resolve:{
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },
  entry:['babel-polyfill', './lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // { test: /\.css$/, use: 'css-loader' },
      // { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.(js|jsx)$/, 
        exclude:/node_modules/, 
        use: 'babel-loader' }
    ]
  }
}