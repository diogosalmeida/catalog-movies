module.exports = () => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/movies-catalog');
}
