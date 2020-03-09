const mongoose = require('mongoose');
const { Schema } = mongoose

const CarSchema = new Schema({

    rut: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    patente: { type: String, required: true },
    descripcion: { type: String, required: true }

});

module.exports = mongoose.model('Car', CarSchema);