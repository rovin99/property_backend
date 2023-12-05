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
    }
  }
  Property.init({
    
  id: {
    allowNull: false,
    
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
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