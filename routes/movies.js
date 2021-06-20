const Router = require('express-promise-router');
const router = new Router();
const { auth } = require('../controllers/users');
const {
  createMovies,
  getMovies,
  detailsMovies,
  searchMovie,
  updateMovies,
  deleteMovies,
 } = require('../controllers/movies');

router.post('/', auth, createMovies);
router.get('/', auth, getMovies);
router.get('/details/:id', auth, detailsMovies);
router.get('/search', auth, searchMovie);
router.put('/:id', auth, updateMovies);
router.delete('/:id', auth, deleteMovies);

module.exports = router;
