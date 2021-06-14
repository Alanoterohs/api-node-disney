// import Movies from '../models/movies';
//
// exports.createMovies = async (req, res) => {
//   const { image, title, creation, qualification } = req.body;
//   try {
//     const newMovie = await Movies.create({
//       image,
//       title,
//       creation,
//       qualification,
//     }, {
//       fields: ['image', 'title', 'creation', 'qualification'],
//     });
//     res.json({
//       data: newMovie,
//       message: 'new movie created',
//     });
//
//   } catch (error) {
//     console.log(error.message);
//   }
// };
//
// exports.getMovies = async (req, res) => {
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
// exports.updateMovies = async (req, res) => {
//   const { id } = req.params;
//
//   try {
//     ;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
//
// exports.deleteMovies = async (req, res) => {
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
