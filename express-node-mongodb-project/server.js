var express = require('express');
var app = express();
var mongoose = require('mongoose');

var employeeRouter = require('./routes/employeeRoutes');


app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/employees', employeeRouter);

mongoose.connect('mongodb://localhost:27017/demodb')
    .then(() => { console.log('Coonection is successful.') })
    .catch((err) => { console.error(err) })

app.get('/', (req, res) => {
    res.send('Lets Begin..!!')
})

app.listen(3001, function () {
    console.log('Server is running at port 3001..!!')
})