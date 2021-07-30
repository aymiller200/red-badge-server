module.exports = (sequelize, DataTypes) => {

    return sequelize.define('SocialMedia', {
        socialMedia: {
            type: DataTypes.STRING,
            allowNull: true
        },

    })

}