const Router = require('express-promise-router');
const router = new Router();
const users = require('../controllers/users');
const auth = require('../utils/auth');

// router.post('/auth/register', users.register);
// router.post('/auth/login', users.login)
