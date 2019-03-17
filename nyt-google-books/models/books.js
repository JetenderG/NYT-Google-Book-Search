var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var booksSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        sparse: true
    },
    description: {
        type: String,
        required: true,
        unique: true,
        sparse: true
    },
    link: {
        type: String,
        required: true,
        unique: true,
        sparse: true
    },
    authors: {
        type: String,
        required: false
    },
    img: {
        data: Buffer,
        contentType: String
    }
})


var Books = mongoose.model("Books", booksSchema);
module.exports = Books;