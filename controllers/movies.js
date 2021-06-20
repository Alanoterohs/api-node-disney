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
    res.status(200).json({ newMovie });

  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

const getMovies = async (req, res) => {
  try {
    const movies = await Movies.findAll({
      attributes: ['image', 'title', 'creation'],
    });
    res.status(200).json({ movies });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

const detailsMovies = async (req, res) => {
  try {
    const { id } = req.params;

    const detailMovie = await Movies.findOne({
      where: { id },
      attributes: ['image', 'title', 'creation', 'qualification'],
    });
    const nameChar = detailMovie.dataValues.title;

    const charactersAssociated = await Character.findAll({
        where: {
          asoc_movie: nameChar,
        },
        attributes: ['image', 'name', 'age', 'weight', 'history', 'asoc_movie'],
      });
    res.status(200).json({ detailMovie, charactersAssociated });

  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

const updateMovies = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, title, creation, qualification, gender }  = req.body;
    const char = await Movies.findOne({
      where: { id },
      attributes: ['image', 'title', 'creation', 'qualification', 'gender'],
    });
    const updatedChar = await Movies.update(
      { image, title, creation, qualification, gender },
      { where: { id } },
    );
    res.status(200).json({ message: 'movie updated' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

const deleteMovies = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMovie = await Movies.destroy({
      where: { id },
    });
    res.status(200).json({ message: 'movie deleted' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
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
    res.status(200).json({ filter });

  } catch (error) {
    res.status(500).send('Server error');
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
