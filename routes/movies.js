const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/',(req, res, next) => {
  res.send('Bem vindo a Api de filmes');
});

router.post('/insert-movie',(req,res)=>{
  res.send('Cadastro de filme concluido com sucesso')
})

router.get('/list-movies',(req,res)=>{
  res.send('Bem vindo a lista de Filmes')
})
module.exports = router;
