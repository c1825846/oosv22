const {Router} = require('express')
const router = new Router()
const mongoose = require("mongoose")
const path = require('node:path')

const Item = require('../models/Item')
const Order = require('../models/Order')
const CallOrder = require('../models/CallOrder')
const User = require('../models/User')
const Category = require('../models/Categoty')

router.get('/item', async (req, res) => {
    const items = await Item.find({})
        .populate('category')
        .exec()
    res.json(items)
})

router.get('/item/:id', async (req, res) => {
    const item = await Item.findOne({_id: req.params.id})
        .populate('category')
        .exec()
    res.json(item)
})

router.post('/item', async (req, res) => {
    const { title, price, description, category } = req.body
    const image = req.files.image
    await image.mv(path.join('uploads', image.name))
    const imagePath = '/uploads/' + image.name
    const item = new Item({
        title, price, description, category, imagePath
    })
    await item.save()
    res.json(item)
})

router.delete('/item', async (req, res) => {
    await Item.deleteOne({_id: req.params.id})
    res.json({message: 'item deleted'})
})

router.get('/order', async (req, res) => {

})

router.get('/order', async (req, res) => {

})

router.post('/order', async (req, res) => {

})

router.delete('/order', async (req, res) => {

})

router.get('/category', async (req, res) => {
    const categories = await Category.find({})
    res.json(categories)
})

router.get('/category/:id', async (req, res) => {
    const category = await Category.findOne({_id: req.params.id})
    res.json(category)
})

router.post('/category', async (req, res) => {
    const { title } = req.body
    const category = new Category({title})
    await category.save()
    res.json(category)
})

router.delete('/category/:id', async (req, res) => {
    await Category.deleteOne({_id: req.params.id})
    res.json({message: 'category deleted'})
})

router.get('/callOrder', async (req, res) => {
    const orders = await CallOrder.find({})
    res.json(orders)
})


router.post('/callOrder', async (req, res) => {
    const { name, phone } = req.body
    const order = new CallOrder({name, phone})
    await order.save()
    res.json(order)
})

router.delete('/callOrder/:id', async (req, res) => {
    await CallOrder.deleteOne({_id: req.params.id})
    res.json({message: 'order deleted'})
})

module.exports = router