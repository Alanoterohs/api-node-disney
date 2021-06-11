const { Sequelize, DataTypes } = require('sequelize');
import sequelize from '../database/database';

const Users = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  mail: {
    type: DataTypes.STRING,
  },

  // asoc_characters: {
  //   type: DataTypes.
  // },
});
