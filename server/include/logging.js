//  logging.js
//  handle request logging

const morgan = require('morgan');

module.exports = {
    logging: function(param) {
        return morgan(param);
    },
    logging: function(loginString, param) {
        return morgan(loginString, param);
    },
    loggingToken: function(name, callback) {
        return morgan.token(name, callback);
    }
}