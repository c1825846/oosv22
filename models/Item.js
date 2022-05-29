const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    title: String,
    price: Number,
    description: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    imagePath: String,
})

module.exports = mongoose.model('Item', schema)