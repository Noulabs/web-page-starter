"use strict";

const WEBPACK = require('webpack'),
      CONFIG = require('./package.json'),
      PATH = require('path');

const NAME = "web-page-starter",
      PROD = process.argv.indexOf('-p') !== -1,
      BUILD_DIR = __dirname + '/dist',
      APP_DIR = __dirname + '/src/main.js';

var plugins = [];

var config = {
  entry: {
      'main' : ['./src/main']
     },
  // devtool: 'source-map',
  devServer:{
    inline:true,
    contentBase: BUILD_DIR,
    port:3333
  },
  output: {
    path: BUILD_DIR,
    filename: (PROD) ? '[name].min.js' :'[name].js',
  },
  module: {
    rules: [
      { test: /\.js$/,  use: [{loader: 'babel-loader', options: { presets: ['es2015']}}]},
      { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, use: [ "file-loader" ] },
    	{ test: /\.png$/, use: [ "url-loader?mimetype=image/png" ] },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  plugins: plugins
};

module.exports = config;
