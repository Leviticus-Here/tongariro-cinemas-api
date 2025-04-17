const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  seats: Number,
  date: Date
});

module.exports = mongoose.model('Booking', bookingSchema);
