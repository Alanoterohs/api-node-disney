const { Sequelize, DataTypes } = require('sequelize');
import sequelize from '../database/database';

const Movies = sequelize.define('movies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  image: {
    type: DataTypes.BLOB,
  },
  title: {
    type: DataTypes.STRING,
  },
  creation: {
    type: DataTypes.DATE,
  },
  qualification: {
    type: DataTypes.INTEGER,
  },

  // asoc_characters: {
  //   type: DataTypes.
  // },
});
