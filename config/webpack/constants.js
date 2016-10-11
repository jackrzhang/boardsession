const path = require('path');

const BUILD_DIR = path.join(__dirname, '../..', 'build/');
const SERVER_BUILD_DIR = path.join(BUILD_DIR, 'server/');
const CLIENT_BUILD_DIR = path.join(BUILD_DIR, 'client/');

const SRC_DIR = path.join(__dirname, '../..', 'src/');
const CLIENT_SRC_DIR = path.join(SRC_DIR, 'client/');
const SERVER_SRC_DIR = path.join(SRC_DIR, 'server/');

// Webpack Dev Server Configuration
const HOT_HOST = 'localhost';
const HOT_PORT = 8080;

module.exports = {
  BUILD_DIR,
  CLIENT_BUILD_DIR,
  SERVER_BUILD_DIR,
  SRC_DIR,
  CLIENT_SRC_DIR,
  SERVER_SRC_DIR,
  HOT_HOST,
  HOT_PORT
};
