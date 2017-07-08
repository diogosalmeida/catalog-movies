const express = require('express');
const movie = require('../movie');
const router = express.Router();

/* GET users listing. */
router.get('/',(req, res, next) => {
  res.send('Bem vindo a Api de filmes');
});

router.post('/insert-movie',(req,res)=>{
  res.send('Cadastro de filme concluido com sucesso')
})

router.get('/list-movies',(req,res)=>{
  res.json(movie);
})
module.exports = router;
