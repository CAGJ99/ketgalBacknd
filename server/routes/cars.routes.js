const express = require('express');
const router = express.Router();

// controlador
const carCtrl = require('../controllers/cars.controller');

// Rutas
router.get('/cars', carCtrl.getCars);
router.post('/cars', carCtrl.createCar);
router.get('/cars/:id', carCtrl.getCar);
router.put('/cars/:id', carCtrl.updateCar);
router.delete('/cars/:id', carCtrl.deleteCar);

module.exports = router;