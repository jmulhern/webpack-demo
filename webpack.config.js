const TerserPlugin = require('terser-webpack-plugin');
const Path = require('path');


module.exports = {
  mode: 'development',
  entry: ['./src/utils', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' }
    ]
  },
  
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      sourceMap: true, // Must be set to true if using source-maps in production
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    })],
  },

  devServer: {
    contentBase: Path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};