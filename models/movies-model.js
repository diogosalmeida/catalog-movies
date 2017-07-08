const mongoose = require('mongoose');
const connect = require('../configDB/connect');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    direction: String,
    body: String,
    comments: [{ body: String, date: Date }],
    release_year: string,
    likes: Number,
    did_not_like: Number
});

module.exports = mongoose.model('MovieModel',MovieSchema);