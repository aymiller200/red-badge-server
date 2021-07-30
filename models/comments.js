
module.exports = (sequelize, DataTypes) => {

    return sequelize.define('Comment', {
        username: {
            type: DataTypes.STRING, 
            allowNull: false,
            validate:{
                notNull: true
            }
        },

        body: {
            type: DataTypes.STRING, 
            allowNull: false,
            validate:{
                notNull: true
            }
        }
    })

}