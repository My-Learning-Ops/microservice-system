
const mongoose = require('mongoose');

const comicSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    issue: Number,
    volume: Number,
    releaseDate: Date
});

module.exports = new mongoose.model('Comic', comicSchema);