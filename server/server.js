const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const path = require('path');
const { mongoose } = require('./database')

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(cors({ origin: 'localhost:4200' }));
app.use(express.json());
// habilitar View 
app.use(express.static(path.resolve(__dirname, './view')));
// Routes
app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});