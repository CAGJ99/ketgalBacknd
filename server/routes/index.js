const express = require('express');
const app = express();

app.use(require('./cars.routes'));

module.exports = app;