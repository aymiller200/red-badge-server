module.exports = (sequelize, DataTypes) => {

    return sequelize.define('Guest', {
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
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },

        bandName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

    })

}