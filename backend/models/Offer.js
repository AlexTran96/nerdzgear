const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Offer extends Model {}
    Offer.init({
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        }
      }, {    
        sequelize,
        tableName: 'offers',
        modelName: 'Offers',
    });
    
    return Offer
}