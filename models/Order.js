const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: String,
    email: String,
    phone: String,
    inn: String,
    comment: String,
    cart: [{
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        },
        quantity: Number
    }]
})

module.exports = mongoose.model('Order', schema)