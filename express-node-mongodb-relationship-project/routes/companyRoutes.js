
var compnayController = require('../controllers/companyController')
var express = require('express');
var app = express.Router();

app.get('/', compnayController.findAll);

app.get('/init', compnayController.init)

module.exports = app;