//  fs.js
//  include functions for file and folder handling

const fs = require('fs');

module.exports = {
    existFolder: function(path) {
        let status = false;
        
        if (fs.existsSync(path)) {
            status = true;
        } else {
            status = false;
        }

        return status;
    },
    createFolder: function(path) {
        if (!fs.existsSync(path)){
            fs.mkdirSync(path);
        }
    },
    readFiles: function(path, callback) {
        return fs.readFile(path, 'utf8', callback);
    },
    appendTextToFiles: function(path) {
        return fs.createWriteStream(path, {flags: 'a'})
    }
}