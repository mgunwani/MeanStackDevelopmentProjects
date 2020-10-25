
/**
 * Mongoose Schema that will map to mongodb collection and it will also
 * define the shape of document within that collection.
 */

var mongoose = require('./db')

var employeeSchema = new mongoose.Schema({
    name: String,
    address: String,
    position: String,
    salary: {
        type: Number,
        required: true
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Employee', employeeSchema);