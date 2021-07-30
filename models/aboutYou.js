
module.exports = (sequelize, DataTypes) => {

    return sequelize.define('AboutYou', {
        body: {
            type: DataTypes.STRING,
            allowNull: true
        } 
    })

}