// All routes that are related to articles
const express = require('express');
const router = express.Router();

// This is connected to the server.js
router.get('/new', (req, res) => {
  res.render('articles/new');
});

module.exports = router;