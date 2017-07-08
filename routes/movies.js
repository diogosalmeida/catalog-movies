const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Bem vindo a Api de filmes');
});

module.exports = router;
