const { Sequelize, DataTypes } = require('sequelize');
import sequelize from '../database/database';

const Gender = sequelize.define('gender', {
  name: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.BLOB,
  },

  // asoc_characters: {
  //   type: DataTypes.
  // },
});
