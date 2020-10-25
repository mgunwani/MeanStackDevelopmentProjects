var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var indexRouter = require('./routes/indexRoutes');
var employeeRouter = require('./routes/employeeRoutes');
var companyRouter = require('./routes/companyRoutes');
var productRouter = require('./routes/productRoutes');

app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/employees', employeeRouter);
app.use('/companies', companyRouter);
app.use('/products', productRouter);

app.listen(3001, function () {
    console.log('Server is running at port 3001..!!')
})