const sequelize = require('sequelize')
const db = require('../db')

const Guest = db.define('guest', {
    email: {
        type: sequelize.STRING, 
        allowNull: false, 
        unique: true
    },

    username: {
        type: sequelize.STRING, 
        allowNull: false, 
        unique: true
    },

    firstName: {
        type: sequelize.STRING,
        allowNull: false
    },

    lastName: {
        type: sequelize.STRING,
        allowNull: true
    },
    
    bandName: {
        type: sequelize.STRING, 
        allowNull: false
    },

    password: {
        type: sequelize.STRING, 
        allowNull: false
    },

   
})

module.exports = Guest