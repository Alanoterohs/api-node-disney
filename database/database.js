const Sequelize = require('sequelize');
const UsersModel = require('../models/users');

const sequelize = new Sequelize('disney', 'root', 'password', {
      host: 'localhost',
      dialect: 'mysql',
    });

const User = UsersModel(sequelize, Sequelize);

//connection to ddbb
sequelize.sync({ force: false, })
  .then(() => {
    console.log('connection ok');
  });

module.exports = {
  User,
};
