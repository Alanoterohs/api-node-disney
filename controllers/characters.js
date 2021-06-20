const { Character, Movies } = require('../database/database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const createCharacters = async (req, res) => {
  try {
    const { image, name, age, weight, history, asoc_movie, } = req.body;
    const newChar = await Character.create({
      image,
      name,
      age,
      weight,
      history,
      asoc_movie,
    });
    await newChar.save();
    res.status(201).json({ newChar });

  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

const listCharacters = async (req, res) => {
  try {
    const getChar = await Character.findAll({
      attributes: ['image', 'name'],
    });
    res.status(200).json({ getChar });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

const detailsCharacters = async (req, res) => {
  try {
    const { id } = req.params;
    const detailChar = await Character.findOne({
      where: { id },
      attributes: ['image', 'name', 'age', 'weight', 'history', 'asoc_movie'],
    });
    const nameMovie = detailChar.dataValues.asoc_movie;
    const movieAssociated = await Movies.findAll({
      where: {
        title: nameMovie,
      },
      atributes: ['image', 'title', 'creation'],
    });
    res.status(200).json({ detailChar });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

const updateCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, name, age, weight, history, asoc_movie } = req.body;
    const char = await Character.findOne({
      where: { id },
      attributes: ['image', 'name', 'age', 'weight', 'history', 'asoc_movie'],
    });
    const updatedChar = await Character.update(
      { image, name, age, weight, history, asoc_movie },
      { where: { id } },
    );
    res.status(201).json({ message: 'Character updated :D' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedChar = await Character.destroy({
      where: { id },
    });
    res.status(200).json({ message: 'Character deleted D:' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

const searchCharacter = async (req, res) => {
  try {
    const { name, age, weight, asoc_movie, } = req.query;

    // es un filtro OR, los parametros si o si deben estar en la ruta
    const searchChar = await Character.findAll({
      where: {
        [Op.or]: [{ name }, { age }, { weight }, { asoc_movie }],
      },
    });
    res.status(200).json({ searchChar });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  listCharacters,
  createCharacters,
  detailsCharacters,
  updateCharacter,
  deleteCharacter,
  searchCharacter,
};
