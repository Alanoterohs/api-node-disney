const users = require('./users');
const character = require('./character');
const movies = require('./movies');

module.exports = app => {
  app.use('/auth', users);
  app.use('/movies', movies);
  app.use('/character', character);
};
