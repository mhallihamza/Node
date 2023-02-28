var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hamzamhalli95@gmail.com',
    pass: 'hamza1995@@'
  }
});

var mailOptions = {
  from: 'hamzamhalli95@gmail.com',
  to: 'hamzamhalli95@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("error" + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});