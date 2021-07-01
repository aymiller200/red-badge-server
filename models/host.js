const sequelize = require('sequelize')
const db = require('../db')

const Host = db.define('host',{
    email:{
        type: sequelize.STRING, 
        allowNull: false, 
        unique: true
    },

    username:{
        type: sequelize.STRING, 
        allowNull: false, 
        unique: true
    },

    firstName:{
        type: sequelize.STRING, 
        allowNull: false, 
    },

    lastName:{
        type: sequelize.STRING, 
        allowNull:false
    },

    streetAddress:{
        type: sequelize.STRING, 
        allowNull: false
    },
    
    state:{
        type: sequelize.STRING,
        allowNull: false
    },
    
    city:{
        type: sequelize.STRING, 
        allowNull: false
    },
    
    zip: {
        type: sequelize.INTEGER, 
        allowNull: false
    },

    password:{
        type: sequelize.STRING, 
        allowNull: false
    },
})

module.exports = Host