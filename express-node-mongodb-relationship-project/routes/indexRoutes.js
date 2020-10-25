
var express = require('express');
var app = express.Router();

app.get('/', (req, res) => {
    res.send('Working with Express.js !!')
})

module.exports = app;
