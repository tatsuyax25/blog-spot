const express = require('express');
const app = express();

// Coding views in EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(5001);