//  index.js
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const DBQuery = require('./data/DBQuery.json');
const DATABASE = "shoppingcart";
const PORT = process.env.PORT || 3001;
const app = express();

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : DATABASE,
});

//  connect to database
db.connect(function(err) {
    if (err) throw err;

    //  create required tables
    DBQuery.queries.map((itm,ind) => {
        db.query(itm.query);
    })

    app.use(cors());

    app.get("/", (req, res) => {
        res.json({ status: '200', message: "Success" });
    });
        
    app.get("/api", (req, res) => {
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