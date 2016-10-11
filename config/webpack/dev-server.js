const dotenv = require('dotenv');
dotenv.config({ path: './config/dotenv/development.env' });
const { HOT_PORT, HOT_HOST } = process.env;

const express = require('express');
const morgan = require('morgan');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const configDev = require('./config.client.dev');

const devServer = express();
devServer.use(morgan('dev'));

const compiler = webpack(configDev);

devServer.use(webpackDevMiddleware(compiler, {
  publicPath: configDev.output.publicPath,
  // quiet: false,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
}));

devServer.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

devServer.listen(HOT_PORT, HOT_HOST, () => {
  console.log(`webpack-dev-server is listening on port ${HOT_PORT}`);
});
