const mongoose = require('mongoose');

const URL = 'mongodb://localhost/ketgal';

mongoose.connect(URL, { useNewUrlParser: true })
    .then(db => console.log('Db is connected'))
    .catch(err => console.error(err));


module.exports = mongoose;