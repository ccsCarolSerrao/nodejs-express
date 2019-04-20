const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookModel = new Schema(
    {
        title: {type: String},
        aouthor: {type: String},
        genre: {type: String},
        read: {type: Boolean, defaul: false},
    }
);


module.exports = mongoose.model('Book', bookModel);