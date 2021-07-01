const express = require('express')
const app = express()
const db = require('./db')

const guestController = require('./controllers/guestController')
const hostController = require('./controllers/hostController')
const bookingController = require('./controllers/bookingController')


app.use(require('./middleware/headers'))
app.use(express.json())

app.use('/guest', guestController)
app.use('/host', hostController)

db.sync()
app.listen(3535, () => {
    console.log('App is listening on port 3535')
})