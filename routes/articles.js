// All routes that are related to articles
const express = require('express');
const Article = require('./../models/article');
const router = express.Router();

// This is connected to the server.js
router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() });
});

// This is connected to the server.js
router.get('/:id', (req, res) => {
  res.send(req.params.id);
})

router.post('/', async (req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  })

  try {
    // Save article
    article = await article.save()
    res.redirect(`/articles/${article.id}`);
  } catch (error) {
    console.log(error);
    res.render('articles/new', {
      article: article
    })
  }
  
});

module.exports = router;