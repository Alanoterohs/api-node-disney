module.exports = (sequelize, Sequelize) => {
  const CharactersModel = sequelize.define('character', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: Sequelize.BLOB,
    },
    name: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    weight: {
      type: Sequelize.FLOAT,
    },
    history: {
      type: Sequelize.STRING,
    },
    asoc_movie: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });
  return CharactersModel;
};
