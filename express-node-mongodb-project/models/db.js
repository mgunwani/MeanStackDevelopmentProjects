
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/demodb')
    .then(() => { console.log('Coonection is successful.') })
    .catch((err) => { console.error(err) })

module.exports = mongoose;