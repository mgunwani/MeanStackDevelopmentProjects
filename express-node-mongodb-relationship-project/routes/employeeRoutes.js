
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

app.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) throw err;
        res.json(employee);
        res.end();
    })
})

app.post('/', function (req, res) {
    Employee.create(req.body, (err) => {
        if (err) throw err;
        res.send('Employee Document Inserted Successfully.')
        res.end();
    });
})

app.delete('/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err) => {
        if (err) throw err;
        res.send('Employee Document is deleted successfully.');
        res.end();
    })
})

app.put("/:id", (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) throw err;
        res.send('Employee Document is updated successfully.');
        res.end();
    })
})

module.exports = app;