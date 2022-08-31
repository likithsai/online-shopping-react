//  email.js
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({ 
    service: 'gmail',
    auth: {
      user: 'likithsai13@gmail.com',
      pass: 'Htikilias@1234567'
    }
});

module.exports = {
    sendMail: function(mailOptions) {
        transporter.sendMail(mailOptions, function(err, info) {
            if(err) {
                console.log('Error sending mail: %s', err);
            } else {
                console.log('Email id %s sent: %s', info.messageId, info.response);
            }
        });
    }
}