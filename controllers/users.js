const { QueryTypes } = require('sequelize');
const { User } = require('../database/database');
//const bcrypt = require('bcryptjs');
const jwtGenerator = require('../utils/JwtGenerator');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name);
    console.log(email);
    console.log(password);
    const newUser = await User.create({
      name,
      email,
      password,
    });
    await newUser.save();
    const token = jwtGenerator(name);
    res.json({ token });
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {

  try {
    const { name, email, password } = req.body;
    const loginUser = await User.findAll({
      where: { password, email },
    });
    console.log(loginUser);
    if (loginUser.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    } else {
      const token = jwtGenerator(loginUser);
      res.json(token);
    }

  } catch (error) {
    console.log(error.message);
  }

};

const auth = async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  register,
  login,
  auth,
};
