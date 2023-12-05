'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        foreignKey: 'ownerId', // Change this to the correct foreign key in the User model
        onDelete: 'CASCADE',
      });
    
    }
  }
  Property.init({
    
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availablefrom: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amenities: {
    type: DataTypes.STRING,
    
  },
  carpetArea:{
    type: DataTypes.STRING,
    allowNull: false,
  
  },
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }}, {
    sequelize,
    modelName: 'Property',
  });
  

  return Property;
};