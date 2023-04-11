const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.json('test on');
});

app.listen(4000);
