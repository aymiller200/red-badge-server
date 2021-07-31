require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')

const guestController = require('./controllers/guestController')
const hostController = require('./controllers/hostController')
const bookingController = require('./controllers/bookingController')
const commentController = require('./controllers/commentController')
const aboutController = require('./controllers/aboutController')
const aboutHostController = require('./controllers/aboutHostController')
const genreController = require('./controllers/genreController')
const socialMediaController = require('./controllers/socialMediaController')

require('./models/associations')

app.use(require('../Red-Badge-Server/middleware/headers'))
app.use(express.json())

app.use('/guest', guestController)
app.use('/host', hostController)
app.use('/book', bookingController)
app.use('/comment', commentController)
app.use('/aboutyou', aboutController)
app.use('/genre', genreController)
app.use('/social-media', socialMediaController)
app.use('/abouthost', aboutHostController )
db.sequelize.sync()


app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
})