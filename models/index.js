const Sequelize = require('sequelize')

const sequelize = new Sequelize('red-badge-server', 'postgres', 'password', {
    host: 'localhost', 
    dialect: 'postgres'
})

const db = {}

db.Sequelize = Sequelize; 
db.sequelize = sequelize; 

db.Guest = require('./guest')(sequelize, Sequelize)
db.Host = require('./host')(sequelize, Sequelize)
db.Book = require('./booking')(sequelize, Sequelize)
db.Comment = require('./comments')(sequelize, Sequelize)


module.exports = db