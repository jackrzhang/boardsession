// Load environment variables
import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: './config/dotenv/development.env' });
} else if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: './config/dotenv/production.env' });
}

const { PORT, APP_NAME } = process.env;

import express from 'express';
const app = express();

// Morgan Logging, Body Parser
import initialize from './config/initialize';
initialize(app);

// Express-Handlebars
import configViewEngine from './config/viewEngine';
configViewEngine(app, express);

// Webpack Dev Middleware + HMR / Express Static
import configStaticAssets from './config/staticAssets';
configStaticAssets(app, express);

// View Routes
import routeViews from './routes/viewRoutes';
routeViews(app);

app.listen(PORT, () => {
  console.log(`${APP_NAME} is listening on port ${PORT}.`);
});

export default app;
