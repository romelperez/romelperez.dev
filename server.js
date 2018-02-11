const next = require('next');
const express = require('express');
const routes = require('next-routes')();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

routes.add('/talks/:talkId', 'talks');

app.prepare().then(() => {
  const server = express();
  server.use(handler);
  server.listen(7000);
});
