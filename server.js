const express = require('express');
const nunjucks = require('nunjucks');
const data = {
  talks: require('./api/data/talks')
};

const app = express();
const port = process.env.PORT || 7000;

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: process.env.NODE_ENV !== 'production'
});

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index.html'));

data.talks.forEach(talk => {
  talk.urls.forEach(url => {
    app.get(url, (req, res) => {
      res.render(`talks/${talk.template}.html`, { talk });
    });
  });
});

app.use((req, res) => res.render('404.html'));

app.listen(port, function (err) {
  if (err) throw err;
  console.log('Server running at http://0.0.0.0:' + port);
});
