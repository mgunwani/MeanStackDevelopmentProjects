

var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/demodb");
var db = mongoose.connection;

db.on('connecting', function () {
    console.log('Trying to connect with mongodb..')
})

db.on('connected', function () {
    console.log('Connection Created Successfully..')
})

db.on('error', function () {
    console.log('OOPS!! thee is some error..')
})

db.on('disconnected', function () {
    console.log('Connection Disconnected..')
})


app.listen(3001, function () {
    console.log('Server is running at port 3001..!!');
})
