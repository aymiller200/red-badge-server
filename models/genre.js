module.exports = (sequelize, DataTypes) => {

    return sequelize.define('Genre', {
        genre: {
            type: DataTypes.STRING,
            allowNull: true
        },

    })

}