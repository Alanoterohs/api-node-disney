const Router = require('express-promise-router');
const router = new Router();
const authVerif  = require('../utils/auth');
const { register, login, auth } = require('../controllers/users');

//const auth = require('../utils/auth');

router.post('/register', authVerif, register);
router.post('/login', authVerif, login);

module.exports = router;
