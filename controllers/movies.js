const { Movies } = require('../database/database');

// const createMovies = async (req, res) => {
//   const { image, title, creation, qualification } = req.body;
//   try {
//     const newMovie = await Movies.create({
//       image,
//       title,
//       creation,
//       qualification,
//     });
//     await newMovie.save();
//     res.json({ newMovie });
//
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const getMovies = async (req, res) => {
//   try {
//     const movies = await Movies.findAll({
//       attributes: ['image', 'title', 'creation'],
//     });
//     res.json({ movies });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
//
// const updateMovies = async (req, res) => {
//   const { id } = req.params;
//
//   try {
//     ;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
//
// const deleteMovies = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deleteMovie = await Movies.destroy({
//       where: { id },
//     });
//     res.json({ message: 'movie deleted' });
//
//   } catch (error) {
//     console.log(error.message);
//   }
// };

module.exports = {
  createMovies,
};
