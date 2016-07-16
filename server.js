const express = require('express');

const app = express();
const port = process.env.PORT || 80;

app.use(express.static(`${__dirname}/assets`));

app.listen(port, function (err) {
  if (err) throw err;
  console.log('Server running at http://127.0.0.1:'+ port);
});
