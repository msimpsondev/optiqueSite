const express = require('express');

const app = express();

const root = app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('root');
});
