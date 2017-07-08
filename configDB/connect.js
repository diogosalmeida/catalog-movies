module.exports = () => {
    const mongoose = require('mongoose');
    return mongoose.connect('mongodb://localhost/movies-catalog');
}

