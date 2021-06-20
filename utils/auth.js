const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const bearer = req.headers['authorization'];
  if (bearer !== undefined) {
    const bearerSplit = bearer.split(' ');
    const token = bearerSplit[1];
    req.token = token;
    jwt.verify(req.token, 'secretkey', (error) => {
      if (!error) {
        res.status(200).send('satisfactory login');
      } else {
        res.status(403).send('Not authorized');
        next();
      }
    });
  } else {
    next();
  }
};
