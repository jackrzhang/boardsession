import path from 'path';
import httpProxy from 'http-proxy';

const configureStaticAssets = (app, express) => {
  // React-Redux Board Application
  if (process.env.NODE_ENV === 'development') {
    const { HOT_PORT, HOT_HOST } = process.env;
    const proxy = httpProxy.createProxyServer();

    // /assets -> Webpack Dev Server
    app.all('/board-assets/*', (req, res) => {
      proxy.web(req, res, {
        target: `http://${HOT_HOST}:${HOT_PORT}`
      });
    });

    proxy.on('error', (err) => {
      console.error('Proxy server error', err);
    });
  } else {
    const boardAssetsPath = path.join(__dirname, './../../../build/client');
    app.use('/board-assets', express.static(boardAssetsPath));
  }

  // Static pages (Landing Page)
  const staticAssetsPath = path.join(__dirname, './../static/');
  app.use('/static-assets', express.static(staticAssetsPath));
};

export default configureStaticAssets;
