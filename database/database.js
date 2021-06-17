const Sequelize = require('sequelize');
const UsersModel = require('../models/users');
const MoviesModel = require('../models/movies');
const CharactersModel = require('../models/characters');

const sequelize = new Sequelize('disney', 'root', 'password', {
      host: 'localhost',
      dialect: 'mysql',
    });

const User = UsersModel(sequelize, Sequelize);
const Movies = MoviesModel(sequelize, Sequelize);
const Character = CharactersModel(sequelize, Sequelize);
const apiKey = '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';

//connection to ddbb
sequelize.sync({ force: false, })
  .then(() => {
    console.log('connection ok');
  });

// Movies.hasMany(Character, { foreinkey: '', sourceKey: });
// Character.belongsTo(Movies, {foreinkey: , targetId:});

module.exports = {
  User,
  Movies,
  Character,
  apiKey,
};
