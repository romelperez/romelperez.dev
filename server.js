const next = require('next');
const routes = require('next-routes')();
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 7000;
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(handler);
  server.listen(port);
});
