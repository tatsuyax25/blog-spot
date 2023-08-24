// All routes that are related to articles
const express = require('express');
const Article = require('./../models/article');
const router = express.Router();

// This is connected to the server.js
router.get('/new', (req, res) => {
  res.render('articles/new');
});

router.post('/', async (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  })

  // Save article
  await article.save()
});

module.exports = router;