const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, { 
    dialect: 'postgres'
})

const db = {}

db.Sequelize = Sequelize; 
db.sequelize = sequelize; 

db.Guest = require('./guest')(sequelize, Sequelize)
db.Host = require('./host')(sequelize, Sequelize)
db.Book = require('./booking')(sequelize, Sequelize)
db.Comment = require('./comments')(sequelize, Sequelize)
db.AboutYou = require('./aboutYou')(sequelize, Sequelize)
db.Genre = require('./genre')(sequelize, Sequelize)
db.SocialMedia = require('./socialMedia')(sequelize, Sequelize)
db.AboutHost = require('./aboutHost')(sequelize, Sequelize)


module.exports = db