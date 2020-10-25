

var productController = require('../controllers/productController');
var express = require('express');
var app = express.Router();

// Find All Products
app.get('/', productController.findAll);
// Find Product By Id
app.get('/:id', productController.findById);
// Find Products By Name
app.get('/:productName', productController.findByName);
// Find Product By Company Name
app.get('/:companyId', productController.findByCompanyId);

module.exports = app;
