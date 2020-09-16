const Car = require('../models/cars');
const carCtrl = {};

carCtrl.getCars = async(req, res, next) => {
    const cars = await Car.find();
    res.json(cars);

}



carCtrl.createCar = async(req, res, next) => {
    const car = new Car({
        rut: req.body.rut,
        marca: req.body.marca,
        modelo: req.body.modelo,
        patente: req.body.patente,
        descripcion: req.body.descripcion
    });
    await car.save();
    res.json({ status: 'car created' });
};
carCtrl.getCar = async(req, res, next) => {
    const { id } = req.params;
    const car = await Car.findById(id);
    res.json(car);

}
carCtrl.updateCar = async(req, res, next) => {
    const { id } = req.params;
    const car = {
        rut: req.body.rut,
        marca: req.body.marca,
        modelo: req.body.modelo,
        patente: req.body.patente,
        descripcion: req.body.descripcion
    };
    await Car.findByIdAndUpdate(id, { $set: car }, { new: true });
    res.json({ status: 'car Updated' });
};


carCtrl.deleteCar = async(req, res, next) => {
    await Car.findByIdAndRemove(req.params.id);
    res.json({ status: 'Car Deleted' });
};
module.exports = carCtrl;