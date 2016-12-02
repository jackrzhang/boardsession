/* eslint-disable global-require */
const webpack = require('webpack');
const fs = require('fs');
const { SERVER_BUILD_DIR, SERVER_SRC_DIR } = require('./constants');

// ----- Configure Node Modules -----

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

// ----- Node Server Configuration -----

const configServer = {
  name: 'server',
  target: 'node',
  node: {
    __dirname: true,
    __filename: true,
    process: true
  },
  output: {
    path: SERVER_BUILD_DIR,
    filename: 'server.bundle.js'
  },
  entry: `${SERVER_SRC_DIR}index.js`,
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  style_modules: {
    extensions: ['css']
  },
  externals: nodeModules,
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();', {
      raw: true,
      entryOnly: false
    })
  ],
  resolve: {
    extensions: ['.es6.js', '', '.js', '.es6']
  },
  postcss: webpackArg => [
    require('postcss-import')({ addDependencyTo: webpackArg }),
    require('postcss-url'),
    require('postcss-assets'),
    require('precss'),
    require('postcss-cssnext')
  ],
  devtool: 'source-map'
};

module.exports = configServer;
