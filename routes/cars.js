const express = require('express');
const router = express.Router(); // getting instance of Router for us
const { createcar, getcars} = require('../controllers/CarController');

// Get all users
router.get('/', getcars);

// Post a new car
router.post('/', createcar);


module.exports = router;