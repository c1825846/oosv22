const {Router} = require('express')
const router = new Router()
const mongoose = require("mongoose")
const path = require('node:path')
const {v4: uuid} = require('uuid')

const Item = require('../models/Item')
const Order = require('../models/Order')
const CallOrder = require('../models/CallOrder')
const User = require('../models/User')
const Category = require('../models/Categoty')
const Session = require('../models/Session')

const auth = require('../middleware/auth')

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

router.post('/item', auth, async (req, res) => {
    try {
        const {title, price, description, category} = req.body
        let imagePath = '/uploads/default.jpg'
        if (req.files) {
            const image = req.files.image
            await image.mv(path.join('uploads', image.name))
            imagePath = '/uploads/' + image.name
        }
        const item = new Item({
            title, price, description, category, imagePath
        })
        await item.save()
        res.json(item)
    } catch (e) {

    }
})

router.post('/item/:id', auth, async (req, res) => {
    try {
        const {title, price, description, category} = req.body
        const item = await Item.findOne({_id: req.params.id})
        if (req.files) {
            const image = req.files.image
            await image.mv(path.join('uploads', image.name))
            item.imagePath = '/uploads/' + image.name
        }
        item.title = title
        item.price = price
        item.description = description
        item.category = category
        await item.save()
        res.json(item)
    } catch (e) {
        console.log(e)
    }
})

router.delete('/item/:id', auth, async (req, res) => {
    await Item.deleteOne({_id: req.params.id})
    res.json({message: 'item deleted'})
})

router.get('/order', async (req, res) => {
    const orders = await Order.find({})
        .populate({path: 'cart.item', select: ['title', 'price']})
        .exec()
    res.json(orders)
})

router.get('/order', async (req, res) => {

})

router.post('/order', async (req, res) => {
    const {name, email, phone, inn, comment, cart} = req.body
    const order = new Order({
        name, email, phone, inn, comment,
        cart: cart.map(item => {
            return {
                item: item.item._id,
                quantity: item.quantity,
            }
        })
    })
    await order.save()
    res.json(order)
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

router.post('/category', auth, async (req, res) => {
    const {title} = req.body
    const category = new Category({title})
    await category.save()
    res.json(category)
})

router.delete('/category/:id', auth, async (req, res) => {
    const items = await Item.find({category: req.params.id})
    if (items.length) {
        res.json({message: 'Невозомжно удалить категорию, так как к ней принадлежат несколько товаров'})
    } else {
        await Category.deleteOne({_id: req.params.id})
        res.json({message: 'Категория удалена'})
    }
})

router.get('/callOrder', auth, async (req, res) => {
    const orders = await CallOrder.find({})
    res.json(orders)
})

router.put('/callOrder/:id', auth, async (req, res) => {
    const order = await CallOrder.findOne({_id: req.params.id})
    order.isDone = true
    console.log(order)
    await order.save()
    res.json(order)
})

router.post('/callOrder', async (req, res) => {
    const {name, phone} = req.body
    const order = new CallOrder({name, phone, isDone: false})
    await order.save()
    res.json(order)
})

router.delete('/callOrder/:id', auth, async (req, res) => {
    await CallOrder.deleteOne({_id: req.params.id})
    res.json({message: 'order deleted'})
})

router.post('/login', async (req, res) => {
    const {login, password} = req.body
    const user = await User.findOne({login})
    if (!user) {
        res.sendStatus(401)
        return
    }
    if (user.password !== password) {
        res.sendStatus(401)
        return
    }
    const session = new Session({
        user: user._id,
        session: uuid()
    })
    await session.save()
    res.json(session)
})

router.get('/logout', async (req, res) => {

    await Session.deleteOne({session: req.cookies.session})
    res.json('ok')
})

module.exports = router