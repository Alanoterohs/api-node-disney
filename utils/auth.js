const Users = require('../models/users');
const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {
  // Get token from header
  const token = req.header('jwt_token');
  //console.log(`TOKEN: ${token}`);

  // Check if not token
  if (!token) {
    return res.status(403).json({ msg: 'authorization denied' });
  }

  // Verify token
  try {
    const { name } = jwt.verify(token, 'secret_key');
    //The findByPk method obtains only a single entry from the table, using the provided primary key.
    const verifyUser = await Users.findByPk(name);
    req.user = verifyUser;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
