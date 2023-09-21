var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gabiraupppimentel@gmail.com',
    pass: 'jrdo hgqj lztd nuve'
  }
});

var mailOptions = {
  from: 'gabiraupppimentel@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Enviando Email usando node.js',
  text: 'jrdo hgqj lztd nuve'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});