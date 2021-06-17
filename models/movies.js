module.exports = (sequelize, Sequelize) => {
  const MoviesModel = sequelize.define('movies', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: Sequelize.BLOB,
    },
    title: {
      type: Sequelize.STRING,
    },
    creation: {
      type: Sequelize.DATE,
    },
    qualification: {
      type: Sequelize.INTEGER,
    },
    gender: {
      type: Sequelize.STRING,
    },
  }, {
    freezeTableName: true,
  });
  return MoviesModel;
};
