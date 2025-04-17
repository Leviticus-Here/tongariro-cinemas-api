const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingsController');
const auth = require('../middlewares/authMiddleware');

// GET all bookings
router.get('/', bookingController.getAllBookings);

// POST new booking
router.post('/', auth, bookingController.createBooking);

// PUT update booking
router.put('/:id', auth, bookingController.updateBooking);

// DELETE booking
router.delete('/:id', auth, bookingController.deleteBooking);

module.exports = router;
