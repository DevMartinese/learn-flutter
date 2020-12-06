const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(require('./routes/users'));

module.exports = app;