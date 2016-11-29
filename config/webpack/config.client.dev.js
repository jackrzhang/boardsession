/* eslint-disable global-require */
const webpack = require('webpack');
const { SRC_DIR, CLIENT_SRC_DIR } = require('./constants');
const { HOT_HOST, HOT_PORT } = process.env;

const configDev = {
  name: 'development',
  target: 'web',
  debug: true,
  entry: [
    'babel-polyfill',
    `webpack-hot-middleware/client?path=http://${HOT_HOST}:${HOT_PORT}/__webpack_hmr`,
    'webpack/hot/dev-server',
    `${CLIENT_SRC_DIR}index.js`
  ],
  output: {
    path: '/', // output.path is irrelevant - bundled assets are served from memory
    filename: 'index.bundle.js',
    publicPath: `http://${HOT_HOST}:${HOT_PORT}/assets/`
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
  plugins: [
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  postcss: webpackArg => [
    require('postcss-import')({ addDependencyTo: webpackArg }),
    require('postcss-url'),
    require('postcss-assets'),
    require('precss'),
    require('postcss-cssnext')
  ],
  devtool: 'source-map'
};

module.exports = configDev;
