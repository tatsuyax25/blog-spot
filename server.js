const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Coding views in EJS
app.set('view engine', 'ejs');

// Body Parser
app.use(express.urlencoded({ extended: false }));



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

// Use the article router
app.use('/articles', articleRouter);

app.listen(5001);