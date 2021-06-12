import Users from '../models/users';
const bcrypt = require('bcryptjs');
const jwtGenerator = require('../utils/JwtGenerator');

exports.register = async (req, res) => {
  const { name, mail } = req.body;
  try {
    const newUser = await Users.create({
      name,
      mail,
    }, {
      fields: ['name', 'mail'],
    });
    const token = jwtGenerator(newUser.name);
    res.json(token);

  } catch (error) {
    console.log(error.message);
  }
};

exports.login = async (req, res) => {
  const { name, mail } = req.body;

  try {
    const loginUser = Users.findAll({
      where: { mail },
    });

    if (!loginUser) {
      return res.status(400).json({ message: 'User not found' });
    } else {
      const token = jwtGenerator(loginUser);
      res.json(token);
    }

  } catch (error) {
    console.log(error.message);
  }

};

exports.auth = async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};
