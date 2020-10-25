var express = require('express');
var app = express();

var employeeRouter = require('./routes/employeeRoutes');
var indexRouter = require('./routes/indexRoutes');

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/employees', employeeRouter);


app.listen(3001, function () {
    console.log('Server is running at port 3001..!!')
})