//  logging.js
//  handle request logging

const morgan = require('morgan'),
    fs = require('./fs'),
    morganLogString = `\n[:remote-ip, :method - :status] :date[web] :url - :response-time ms \n:user-agent`;

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