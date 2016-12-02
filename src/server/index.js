// Load environment variables
import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: './config/dotenv/development.env' });
} else if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: './config/dotenv/production.env' });
}

const { PORT, APP_NAME } = process.env;

// Redux Store
import configureStore from './configureStore';
const store = configureStore();

import express from 'express';
const app = express();

import http from 'http';
const server = http.createServer(app);

import socketIo from 'socket.io';
const io = socketIo(server);

// Morgan Logging, Body Parser
import initialize from './config/initialize';
initialize(app);

// Express-Handlebars
import configureViewEngine from './config/viewEngine';
configureViewEngine(app, express);

// Webpack Dev Middleware + HMR / Express Static
import configureStaticAssets from './config/staticAssets';
configureStaticAssets(app, express);

// View Routes
import routeViews from './routes/viewRoutes';
routeViews(app);

// Web Socket Communication
import configureSocket from './socket/configureSocket';
configureSocket(io, store);

server.listen(PORT, () => {
  console.log(`${APP_NAME} is listening on port ${PORT}.`);
});
