module.exports = (sequelize, DataTypes) => {

    return sequelize.define('Guest', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                notNull: true,
                isEmail: true
            }
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
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
                notNull: true,
                isAlpha: true
            }
        },

        bandName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull: true
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