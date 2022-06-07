const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: String,
    phone: String,
    isDone: Boolean,
})

module.exports = mongoose.model('CallOrder', schema)