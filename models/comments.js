
module.exports = (sequelize, DataTypes) => {

    return sequelize.define('Comment', {
        username: {
            type: DataTypes.STRING, 
            allowNull: false
        },

        body: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    })

}