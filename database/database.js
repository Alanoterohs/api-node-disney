const Sequelize = require('sequelize');
const UsersModel = require('../models/users');
const MoviesModel = require('../models/movies');
const CharactersModel = require('../models/characters');

const sequelize = new Sequelize('disney', 'root', 'password', {
      host: 'localhost',
      dialect: 'mysql',
    });

//const User = UsersModel(sequelize, Sequelize);
const Movies = MoviesModel(sequelize, Sequelize);
const Character = CharactersModel(sequelize, Sequelize);

//connection to ddbb
sequelize.sync({ force: false, })
  .then(() => {
    console.log('connection ok');
  });

// Movies.hasMany(Character, { foreinkey: '', sourceKey: });
// Character.belongsTo(Movies, {foreinkey: , targetId:});

module.exports = {
  //User,
  Movies,
  Character,
};
