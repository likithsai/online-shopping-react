const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
// const bodyParser = require('body-parser');
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
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.get("/", (req, res) => {
        fs.readFile(__dirname + '/view/index.html', 'utf8', (err, text) => {
            res.send(text);
        });
    });

    //  add users into database
    app.post('/registeruser', (req, res) => {
        db.query(`
            INSERT INTO tbl_users(user_name, user_email, user_password) VALUES(
                '${req.body.username}', 
                '${req.body.useremail}', 
                '${req.body.userpass}'
            )`, function(err, res) {
            if (err) throw err;
        });
        res.json({ status: '200', message: "success" });
    });

    //  get user details from database
    app.get('/user/:id', (req, res) => {
        let temp = [], id = req.params.id;
        db.query(`SELECT DISTINCT user_id, user_name, user_email, user_createddate FROM tbl_users WHERE user_id=${id}`, function(err, res) {
            if (err) throw err;
            for (let i in res) {
                temp.push({
                    "userid": res[i].user_id,
                    "username": res[i].user_name,
                    "useremail": res[i].user_email,
                    "usercreateddate": res[i].user_createddate
                });
            }
        });
        
        setTimeout(() => {
            if(temp.length != 0) {
                res.json({ status: '200', message: temp });
            } else {
                res.json({ status: '400', message: [] });
            }
        }, 2);
    });

    //  add purchase order into database
    app.post('/registerorder', (req, res) => {
        db.query(`
            INSERT INTO tbl_orders(order_name, order_cusid, order_price) VALUES(
                '${req.body.ordername}', 
                ${req.body.ordercusid}, 
                ${req.body.orderprice}
            )`, function(err, res) {
            if (err) throw err;
        });
        res.json({ status: '200', message: "success" });
    });

    //  get order details based on userid
    app.get('/orders/:id', (req, res) => {
        let temp = [], id = req.params.id;
        db.query(`SELECT order_id, order_name, order_price, order_createddate FROM tbl_orders WHERE order_cusid=${id}`, function(err, res) {
            if (err) throw err;
            for (let i in res) {
                temp.push({
                    "orderid": res[i].order_id,
                    "ordername": res[i].order_name,
                    "orderprice": res[i].order_price,
                    "ordercreateddate": res[i].order_createddate
                });
            }
        });
        
        setTimeout(() => {
            if(temp.length != 0) {
                res.json({ status: '200', message: temp });
            } else {
                res.json({ status: '400', message: [] });
            }
        }, 2);
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