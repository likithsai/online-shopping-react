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
    sendMail: function(fromAddress, toAddress, subjectLine, contentInHTML) {
        ////    Added mail service
        let mailOptions = mailer.sendMail({
            from: fromAddress,
            to: toAddress,
            subject: subjectLine,
            html: contentInHTML
        });

        transporter.sendMail(mailOptions, function(err, info) {
            if(err) {
                console.log('Error sending mail: %s', err);
            } else {
                console.log('Email id %s sent: %s', info.messageId, info.response);
            }
        });
    }
}