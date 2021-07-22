

module.exports = (sequelize, DataTypes) => {

    return sequelize.define('Book', {

        username: {
            type: DataTypes.STRING, 
            allowNull: false,
            validate:{
                notNull: true,
                notEmpty: true
               
            }
        },
        
        startDate: {
            type: DataTypes.DATEONLY, 
            allowNull: false, 
            validate:{
                notNull: true,
                isDate: true,
                notEmpty: true
            }
        },

        endDate: {
            type: DataTypes.DATEONLY, 
            allowNull: false,
            validate:{
                notNull: true,
                isDate: true,
                notEmpty: true
            }
        },

        peopleStaying: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            validate:{
                notNull: true,
                notEmpty: true
            }
        },

        notes: {
            type: DataTypes.STRING, 
            allowNull: true,
            
        }


    })


}