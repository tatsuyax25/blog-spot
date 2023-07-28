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
    createdAt: new Date(),
    description: 'Test description'
  },
  {
    title: 'Test Article 2',
    createdAt: new Date(),
    description: 'Test description 2'
  }];
  res.render('articles/index', { articles: articles });
});

app.listen(5001);