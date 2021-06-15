module.exports = (sequelize, Sequelize) => {
  const UsersModel = sequelize.define('usuarios', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  }, {
    freezeTableName: true,
  });
  return UsersModel;
};
