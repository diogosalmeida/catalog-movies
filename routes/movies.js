'use strict';

const express = require('express'),
      movieFake = require('../movie'),
      router = express.Router(),
      moment = require("moment"),
      MovieModel = require('../models/movies-model');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('Bem vindo a Api de filmes');
});

router.get('/list-movies', (req, res) => {
  MovieModel.find((error, movies) => {
    if (error) { res.send(error) }
    res.json({ status: 200, message: "Olá seja bem vindo a listagem de filmes", movies: movies })
  });
});

router.get('/find-movie/:id', (req, res) => {
  MovieModel.findOne({ _id: req.params.id }, (error, movie) => {
    if (error) { res.send(error) }
    res.json(movie)
  })
})

router.put('/like-movie/:id', (req, res) => {
  MovieModel.findOne({ _id: req.params.id }, (error, movie) => {
    movie.likes += 1;

    movie.save().then((error, movie) => {
      if (error) { res.send(error); }
      res.json({ status: 200, message: "Sua curtida foi processada", movie: movie });
    })
  });
});

router.put('/update-movie/:id', (req, res) => {
  MovieModel.findOne({ _id: req.params.id }, (error, movie) => {
    if (error) { res.send(error) }

    movie.save().then((error, movie) => {
      if (error) { res.send(error); }
      res.json({ status: 200, message: "Filme alterado com sucesso", movie: movie });
    })
  })
});

router.put('/insert-comment/:id', (req, res) => {
  MovieModel.findOne({ _id: req.params.id }, (error, movie) => {
    if (error) { res.send(error) }
    const comment = {
      body:req.body.comment,
      date:moment().format('DD-MM-YYYY')
    }
    movie.comments.push(comment)

    movie.save().then((error, movie) => {
      if (error) { res.send(error); }
      res.json({ status: 200, message: "Filme alterado com sucesso", movie: movie })
    })
  })
});

router.post('/insert-movie', (req, res) => {
  let movie = new MovieModel(movieFake);
  movie.save().then((error, movie) => {
    if (error) { res.send(error) }
    res.json({ status: 200, message: "Filme salvo com sucesso", movie: movie })
  })
});

router.delete('/remove-movie/:id', (req, res) => {
  MovieModel.deleteOne({ _id: req.params.id }, (error, movie) => {
    if (error) throw error;
    res.json({ status: 200, message: "Filme excluido com sucesso" })
  })
});

module.exports = router;
