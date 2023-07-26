const express = require('express');
const app = express();

// Coding views in EJS
app.set('view engine', 'ejs');

// This render from index.ejs to website
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(5001);