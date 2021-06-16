const { Character } = require('../database/database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const createCharacters = async (req, res) => {
  try {
    const { image, name, age, weight, history, asoc_movie, } = req.body;
    console.log(req.body);
    const newChar = await Character.create({
      image,
      name,
      age,
      weight,
      history,
      asoc_movie,
    });
    await newChar.save();
    res.json({ newChar });

  } catch (error) {
    console.log(error.message);
  }
};

//point 3
const listCharacters = async (req, res) => {
  try {
    const getChar = await Character.findAll({
      attributes: ['image', 'name'],
    });
    res.json({ getChar });
  } catch (error) {
    console.log(error.message);
  }
};

// point 5
const detailsCharacters = async (req, res) => {
  try {
    const { id } = req.params;
    const detailChar = await Character.findOne({
      where: { id },
      attributes: ['image', 'name', 'age', 'weight', 'history', 'asoc_movie'],
    });
    res.json({ detailChar });
  } catch (error) {
    console.log(error.message);
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
    res.json({ message: 'Character updated :D' });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedChar = await Character.destroy({
      where: { id },
    });
    res.json({ message: 'Character deleted D:' })

  } catch (error) {
    console.log(error.message);
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
    res.json({ searchChar });

  } catch (error) {
    console.log(error.message);
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
