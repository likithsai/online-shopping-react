//  email.js
var nodemailer = require('nodemailer'),
    email = require('../data/DBQuery');

var transporter = nodemailer.createTransport({ 
    service: email.emailService[0].service,
    auth: {
      user: email.emailService[0].auth[0].username,
      pass: email.emailService[0].auth[0].password
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