const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

// Coding views in EJS
app.set('view engine', 'ejs');

// Use the article router
app.use('/articles', articleRouter);

// This render from index.ejs to website
app.get('/', (req, res) => {
  const articles = [{
    title: 'Test Article',
    createdAt: Date.now(),
    description: 'Test description'
  }];
  res.render('index', { articles: articles });
});

app.listen(5001);