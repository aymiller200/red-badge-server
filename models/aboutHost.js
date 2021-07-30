module.exports = (sequelize, DataTypes) => {

    return sequelize.define('AboutHost', {
        body: {
            type: DataTypes.STRING,
            allowNull: true
        }

    })

}