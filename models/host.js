module.exports = (sequelize, DataTypes) => {

    return sequelize.define('Host', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        streetAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },

        state: {
            type: DataTypes.STRING,
            allowNull: false
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false
        },

        zip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}