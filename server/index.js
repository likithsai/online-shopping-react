//  index.js
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const fs = require('fs');
const DBQuery = require('./data/DBQuery.json');
const PORT = process.env.PORT || 3001;
const app = express();

var db = mysql.createConnection({
    host: DBQuery.server,
    user: DBQuery.user,
    password: DBQuery.pass,
    database : DBQuery.database,
});

db.connect(function(err) {
    if (err) throw err;

    //  create required tables
    DBQuery.queries.map((itm,ind) => {
        db.query(itm.query);
    })

    app.use(cors());
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.get("/", (req, res) => {
        fs.readFile(__dirname + '/view/index.html', 'utf8', (err, text) => {
            res.send(text);
        });
    });
        
    app.get("/login", (req, res) => {
        res.json({ status: '200', message: "Hello from server!" });
    });

    app.listen(PORT, () => {
        console.log(
          '\n\x1b[32m%s\x1b[0m', 'API Server V 1.0', 
          '\nSimple API server for shopping cart',
          '\n\n\x1b[42mINFO\x1b[0m',
          '\n\x1b[36mURL:\x1b[0m\t', `http://localhost:${PORT}`,
        );
        console.log('\n\x1b[36m%s\x1b[0m', 'Press CNTRL+C to stop ...');
    });
});