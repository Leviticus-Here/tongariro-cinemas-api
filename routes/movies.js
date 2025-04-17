const express = require('express');
const router = express.Router();
const movieController = require('../controllers/moviesController');

// GET all movies
router.get('/', movieController.getAllMovies);

// POST new movie
router.post('/', movieController.createMovie);

// PUT update movie
router.put('/:id', movieController.updateMovie);

// DELETE movie
router.delete('/:id', movieController.deleteMovie);

module.exports = router;