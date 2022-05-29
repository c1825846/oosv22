const express = require('express')
const mongoose = require('mongoose')
const path = require('node:path')
const fileUpload = require('express-fileupload')

const apiRouter = require('./routes/api')

const url = 'mongodb://127.0.0.1:27017/oosv22'
mongoose.connect(url, err => {
    if (err) throw err
    console.log(`Database connected: ${url}`)
})

const PORT = 5000

const app = express()

app.use('/uploads', express.static('uploads'))
app.use(fileUpload({}))
app.use(express.json({ extended: true }))
app.use('/api', apiRouter)

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

async function main() {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })
}

main()
    .catch(err => {
        console.log(err)
    })