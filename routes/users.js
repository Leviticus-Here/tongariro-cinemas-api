const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const auth = require('../middlewares/authMiddleware');

// Public routes
router.post('/', userController.registerUser); // Register
router.post('/login', userController.loginUser); // Login

// Admin/secure routes
router.get('/', auth, userController.getAllUsers);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;