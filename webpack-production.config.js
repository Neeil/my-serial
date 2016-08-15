const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
// const PACKAGE_JSON = path.join(__dirname, 'package.json')
// const binding_path = binary.find(path.resolve(PACKAGE_JSON))
// const serialportBinding = require(binding_path)

const config = {
  entry: {
    a: path.join(__dirname, '/src/app/app.js'),
    b: path.join(__dirname, '/src/app/port.js')
  },
  // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    path: buildPath, // Path of output file
    filename: '[name].js', // Name of output file
  },
  externals : {
    "serialport" : "serialport"
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // Minify the bundle
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     // suppresses warnings, usually from module minification
    //     warnings: false,
    //   },
    // }),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Transfer Files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      {
        test: /\.node$/,
        loaders: ['node-loader'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.json$/,
        loaders:['json-loader'],
        exclude: [nodeModulesPath],
      }
    ],
  },
  target : 'electron',

};

module.exports = config;
