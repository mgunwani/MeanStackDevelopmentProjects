


var Company = require('./company')
var mongoose = require('./db');
var Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
    code: String,
    name: String,
    details: String,
    company: { type: Schema.Types.ObjectId, ref: 'Company' }
})

module.exports = mongoose.model('Product', productSchema);