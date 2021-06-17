const { Movies, Character } = require('../database/database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const createMovies = async (req, res) => {
  try {
    const { image, title, creation, qualification, gender } = req.body;
    const newMovie = await Movies.create({
      image,
      title,
      creation,
      qualification,
      gender,
    });
    await newMovie.save();
    res.json({ newMovie });

  } catch (error) {
    console.log(error.message);
  }
};

const getMovies = async (req, res) => {
  try {
    const movies = await Movies.findAll({
      attributes: ['image', 'title', 'creation'],
    });
    res.json({ movies });
  } catch (error) {
    console.log(error.message);
  }
};

//Falta devolver char asociado;
const detailsMovies = async (req, res) => {
  try {
    const { id } = req.params;

    const detailChar = await Movies.findOne({
      where: { id },
      attributes: ['image', 'title', 'creation', 'qualification'],
    });
    const nameChar = detailChar.dataValues.title;

    const charactersAssociated = await Character.findAll({
        where: {
          asoc_movie: nameChar,
        },
        attributes: ['image', 'name', 'age', 'weight', 'history', 'asoc_movie'],
      });
    res.json({ detailChar, charactersAssociated });

  } catch (error) {
    console.log(error.message);
  }
};

const updateMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, title, creation, qualification }  = req.body;
    const char = await Movies.findOne({
      where: { id },
      attributes: ['image', 'title', 'creation', 'qualification'],
    });
    const updatedChar = await Movies.update(
      { image, title, creation, qualification },
      { where: { id } },
    );
    res.json({ message: 'movie updated' });

  } catch (error) {
    console.log(error.message);
  }
};

const deleteMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMovie = await Movies.destroy({
      where: { id },
    });
    res.json({ message: 'movie deleted' });

  } catch (error) {
    console.log(error.message);
  }
};

const searchMovie = async (req, res) => {
  try {
    const { title, gender, order } = req.query;

    const filter = await Movies.findAll({
      where: {
        [Op.or]: [{ title }, { gender }],
      },
      order: [['creation', order]],
    });
    res.json({ filter });

  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createMovies,
  getMovies,
  detailsMovies,
  updateMovies,
  deleteMovies,
  searchMovie,
};
