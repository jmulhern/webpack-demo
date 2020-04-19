const TerserPlugin = require('terser-webpack-plugin');
const Path = require('path');


module.exports = {
  mode: 'development',
  entry: ['./src/utils', './src/index'],
  output: {
    path: Path.resolve(__dirname, 'dist'),
    publicPath: 'public/js',
    filename: 'bundle.js',
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
    contentBase: Path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  }
};