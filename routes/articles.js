// All routes that are related to articles
const express = require('express');
const router = express.Router();

// This is connected to the server.js
router.get('/', (req, res) => {
  res.send('In articles');
});

module.exports = router;