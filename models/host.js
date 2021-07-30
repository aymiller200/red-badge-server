module.exports = (sequelize, DataTypes) => {

    return sequelize.define('Host', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true, 
                notNull: true
            }
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: true, 
                isAlphanumeric: true
            }
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull: true,
                isAlpha: true
            }
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull: true
            }
        },

        streetAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull: true,
            }
        },

        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull: true,
                isAlpha: true,
                max: 2, 
                min: 2
            }
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull: true, 
                isAlpha: true,
            }
        },

        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notNull: true, 
                isNumeric: true, 
                min: 5
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull: true, 
                min: 5
            }
        },
    })
}