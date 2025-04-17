const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  description: String,
  releaseDate: Date,
  isClassic: Boolean
});

module.exports = mongoose.model('Movie', movieSchema);
