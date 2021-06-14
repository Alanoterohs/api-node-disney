const Router = require('express-promise-router');
const router = new Router();
const { register, login, auth } = require('../controllers/users');

//const auth = require('../utils/auth');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
