const {Router} = require('express')
const router = new Router()
const mongoose = require("mongoose")

const Item = require('../models/Item')
const Order = require('../models/Order')
const CallOrder = require('../models/CallOrder')
const User = require('../models/User')

router.get('/item', async (req, res) => {
    const item = await Item.find({})
    res.json(item)
})

router.get('/item/:id', async (req, res) => {
    const item = await Item.findOne({_id: req.params.id})
    res.json(item)
})

router.post('/item', async (req, res) => {

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


module.exports = router