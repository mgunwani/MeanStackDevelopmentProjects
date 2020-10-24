
var mongoose = require('mongoose');
var Employee = require('../models/employee');
var express = require('express');
var app = express.Router();

app.get('/', function (req, res) {
    Employee.find((err, employees) => {
        if (err) throw err;
        res.json(employees);
        res.send();
    })
})

app.post('/', function (req, res) {
    Employee.create(req.body, (err) => {
        if (err) throw err;
        res.send('Employee Document Inserted Successfully.')
        res.end();
    });
})

module.exports = app;