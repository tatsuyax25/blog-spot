const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

// Coding views in EJS
app.set('view engine', 'ejs');

// Use the article router
app.use('/articles', articleRouter);

// This render from index.ejs to website
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(5001);