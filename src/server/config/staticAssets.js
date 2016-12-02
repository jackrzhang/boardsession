import path from 'path';
import httpProxy from 'http-proxy';

const configureStaticAssets = (app, express) => {
  if (process.env.NODE_ENV === 'development') {
    const { HOT_PORT, HOT_HOST } = process.env;
    const proxy = httpProxy.createProxyServer();

    // /assets -> Webpack Dev Server
    app.all('/assets/*', (req, res) => {
      proxy.web(req, res, {
        target: `http://${HOT_HOST}:${HOT_PORT}`
      });
    });

    proxy.on('error', (err) => {
      console.error('Proxy server error', err);
    });
  } else {
    const staticPath = path.join(__dirname, './../../../build/client');
    app.use('/assets', express.static(staticPath));
  }
};

export default configureStaticAssets;
