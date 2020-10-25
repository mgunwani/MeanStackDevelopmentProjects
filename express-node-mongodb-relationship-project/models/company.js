
var mongoose = require('./db');

var companySchema = new mongoose.Schema({
    name: String,
    street: String,
    phone: String
})

module.exports = mongoose.model('Company', companySchema);