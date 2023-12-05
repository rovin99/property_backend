'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Property, {
        foreignKey: 'ownerId', 
        onDelete: 'CASCADE',
      });
    }
  }
  User.init({
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,

    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
    {
      sequelize,
      modelName: 'Users',
    });
  
  return User;
};