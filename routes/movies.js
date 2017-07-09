const express = require('express');
const movieFake = require('../movie');
const router = express.Router();
const MovieModel = require('../models/movies-model');
/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('Bem vindo a Api de filmes');
});

router.post('/insert-movie', (req, res) => {
  let movie = new MovieModel(movieFake);
  movie.save().then((err, movie) => {
    res.json({ status: 200, message: "Filme salvo com sucesso", movie: movie });
  })

});

router.get('/list-movies', (req, res) => {
  MovieModel.find((error, movies) => {
    res.json({ status: 200, message: "Olá seja bem vindo a listagem de filmes", movies: movies })
  });

});

module.exports = router;
