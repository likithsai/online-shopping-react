//  logging.js
//  handle request logging

const morgan = require('morgan'),
    fs = require('./fs'),
    morganLogString = `\n:date \n[:method - :status, HTTP Version :http-version] \n:remote-ip :url - :response-time ms \n:user-agent`;

morgan.token('remote-ip', (req, res) => { 
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    return ip.toString().replace('::ffff:', '');
});

module.exports = {
    logging: function() {
        return morgan(morganLogString);
    },
    appendLoggingToFile: function(filepath) {
        return morgan(morganLogString, { stream: fs.appendTextToFiles(filepath, {flags: 'a'}) });
    }
}