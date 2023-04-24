const Car = require('../models/Car');
const mongoose = require('mongoose');

// Get all cars
async function getcars(req, res) {
  try {
    const cars = await Car.find({}).sort({createdAt: -1}); // Sorting in descending order based on creation date
    res.status(200).json(cars);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
}


// Create a new car
async function createcar(req, res) {
  const {
    title,
    maker,
    description
  } = req.body;
  console.log(req.body)
  try {
    const newCar = await Car.create({
        title,
        maker,
        description
    });
    res.status(201).json(newCar);
  } catch (err) {
    console.error('Error creating new car:', err.message);
    res.status(500).json({error: err.message});
  }
}




module.exports = {
  getcars,
  createcar,
};
