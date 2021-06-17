const { QueryTypes } = require('sequelize');
const { User } = require('../database/database');
const bcrypt = require('bcryptjs');
const jwtGenerator = require('../utils/JwtGenerator');
const { sendEmail } = require('../utils/sendMail');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({
      name,
      email,
      password,
    });

    //Hash the password
    const salt = 10;
    const passwordEncrypted = await bcrypt.hash(password, salt);

    //paso la psw encriptada a la contraseña del nuevo usuario
    newUser.password = passwordEncrypted;

    //send email to enrolled
    sendEmail(name, email);
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
