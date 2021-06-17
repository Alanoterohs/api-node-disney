const sendMail = require('@sendgrid/mail');
const { apiKey } = require('../database/database');

const sendEmail = (name, mail) => {
    sendMail.setApiKey(apiKey);
    const msg = {
      to: mail,
      from: 'alanoterohs@gmail.com',
      subject: 'Te has registrado a la API de Disney.',
      text: 'Welcome!',
      html: '<strong>Welcome ' + name + '</strong>',
    };

    sendMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
  };

module.exports = {
    sendEmail,
  };
