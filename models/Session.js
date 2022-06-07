const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    session: String
})

module.exports = mongoose.model('Session', schema)