const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    login: String,
    password: String,
})

module.exports = mongoose.model('User', schema)