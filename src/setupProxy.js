const proxy = require('http-proxy-middleware');
const morgan = require('morgan');

module.exports = (app) => {
  app.use(
    '/v1/**',
    proxy({
      target: process.env.REACT_APP_COINMARKETCAP_URL,
      changeOrigin: true,
      logLevel: 'debug',
    })
  );

  app.use(morgan('combined'));
};
