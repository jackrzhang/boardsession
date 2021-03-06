/* eslint-disable global-require */
const webpack = require('webpack');
const { SRC_DIR, CLIENT_BUILD_DIR, CLIENT_SRC_DIR } = require('./constants');

const configProd = {
  name: 'production',
  entry: [
    'babel-polyfill',
    `${CLIENT_SRC_DIR}index.js`
  ],
  output: {
    path: CLIENT_BUILD_DIR,
    filename: 'index.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$|.jsx$/,
        include: SRC_DIR,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.es6.js', '', '.js', '.es6']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  postcss: webpackArg => [
    require('postcss-import')({ addDependencyTo: webpackArg }),
    require('postcss-url'),
    require('postcss-assets'),
    require('precss'),
  ],
  devtool: 'source-map'
};

module.exports = configProd;
