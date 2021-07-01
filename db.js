const Sequelize = require('sequelize')

const db = new Sequelize('red-badge-server', 'postgres', 'password', {
    host: 'localhost', 
    dialect: 'postgres'
})

db.authenticate().then(
    () => {
        console.log('This server is connected to database')
    },
    (err) => {
        console.log(`You received this error: ${err}`)
    }
)

module.exports = db