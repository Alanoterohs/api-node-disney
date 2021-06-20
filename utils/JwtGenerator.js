const jwt = require('jsonwebtoken');

function jwtGenerator(name) {
  const payload = {
    user: { name },
  };
  return jwt.sign(payload, 'secretkey', { expiresIn: '2h' });
}

module.exports = jwtGenerator;
