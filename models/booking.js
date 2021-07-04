module.exports = (sequelize, DataTypes) => {

    return sequelize.define('Book', {

        username: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        
        startDate: {
            type: DataTypes.DATE, 
            allowNull: false, 
        },

        endDate: {
            type: DataTypes.DATE, 
            allowNull: false
        },

        peopleStaying: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },

        notes: {
            type: DataTypes.STRING, 
            allowNull: true
        }


    })


}