//  index.js
const express = require("express");
const cors = require("cors");
const DATABASE = "shoppingcart";
const mysql = require("mysql");
const PORT = process.env.PORT || 3001;
const app = express();

const DBQuery = [
      `CREATE TABLE tbl_users (
        user_id int(11) NOT NULL AUTO_INCREMENT,
        user_name varchar(200) DEFAULT NULL,
        user_email varchar(200) DEFAULT NULL,
        user_password varchar(200) NOT NULL,
        user_createddate timestamp NOT NULL DEFAULT current_timestamp(),
        PRIMARY KEY (user_id))`, 
      `CREATE TABLE tbl_orders (
        order_id int(11) NOT NULL AUTO_INCREMENT,
        order_name varchar(200) DEFAULT NULL,
        order_cusid int(11) DEFAULT NULL,
        order_createddate timestamp NOT NULL DEFAULT current_timestamp(),
        PRIMARY KEY (order_id),
        KEY talk_cusid (order_cusid),
        CONSTRAINT talk_cusid FOREIGN KEY (order_cusid) 
        REFERENCES tbl_users(user_id) ON DELETE SET NULL ON UPDATE SET NULL
      )`
];

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : DATABASE,
});

const createTables = (db) => {
    DBQuery.map(itm => {
        db.query(itm);
    });
}

//  connect to database
db.connect(function(err) {
    if (err) throw err;
    
    createTables(db);

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