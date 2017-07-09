const mongoose = require('mongoose');
const connect = require('../configDB/connect')();
const Schema = mongoose.Schema;

const MovieModel = new Schema({
    title: String,
    poster: String,
    direction: String,
    synopsis: String,
    comments: [{ body: String, date: String }],
    release_year: String,
    likes: Number,
    did_not_like: Number,
    budget: Number
});

const Movie = mongoose.model('MovieModel',MovieModel);

module.exports = Movie ;