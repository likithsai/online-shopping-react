const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require('body-parser');
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

    DBQuery.queries.map((itm,ind) => {
        db.query(itm.query);
    })

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get("/", (req, res) => {
        fs.readFile(__dirname + '/view/index.html', 'utf8', (err, text) => {
            res.send(text);
        });
    });

    app.post('/register', (req, res) => {
        db.query(`
            INSERT INTO tbl_users(user_name, user_email, user_password) VALUES(
                '${req.body.user}', 
                '${req.body.email}', 
                '${req.body.pass}'
            )`, function(err, res) {
            if (err) throw err;
        });
        res.json({ status: '200', message: "success" });
    });

    app.listen(PORT, () => {
        console.log(
          '\n\x1b[42m%s\x1b[0m', 'API SERVER V1.0.0', 
          '\nAPI server for managing database for shopping cart application',
          '\n\n\x1b[32mURL:\x1b[0m', `http://localhost:${PORT}`, 
        );
        console.log('\n\x1b[36m%s\x1b[0m', 'Press CNTRL+C to stop ...');
    });
});