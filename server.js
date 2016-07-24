const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = process.env.PORT || 80;

nunjucks.configure('views', {
  autoescape: true,
  express: app
});
app.use(express.static('./assets'));

app.use((req, res, next) => {
  res.render('404.html');
});

app.listen(port, function (err) {
  if (err) throw err;
  console.log('Server running at http://127.0.0.1:'+ port);
});
