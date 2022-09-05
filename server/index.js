const express = require("express"),
    cors = require("cors"),
    mysql = require("mysql"),
    fs = require('./include/fs'),
    morgan = require('./include/logging'),
    path = require('path'),
    session = require('express-session'),
    mailer = require('./include/email'),
    DBQuery = require('./data/DBQuery.json'),
    PORT = process.env.PORT || 3001,
    bodyParser = require('body-parser'),
    logFolder = './log',
    app = express();

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
    });

    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(morgan.logging());

    //  check if log folder exist or not,
    //  if no, create folder
    if(!fs.existFolder(logFolder)) {
        fs.createFolder(logFolder)
    }

    app.use(morgan.appendLogToFile(path.join(__dirname, './log/access.log')));
    app.use(morgan.appendErrorLogToFile(path.join(__dirname, './log/error.log')));
    app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));
    
    app.get('/', (req, res, next) => {
        res.sendStatus(200);
    });

    //  add users into database
    app.post('/registeruser', async(req, res) => {
        let status = 200;

        const result = await new Promise((resolve, reject) => {
            db.query(`INSERT INTO tbl_users(user_name, user_email, user_password) VALUES(
                '${req.body.username}', 
                '${req.body.useremail}', 
                '${req.body.userpass}'
            )`, function(err, res) {
                if (err) return reject(err);
                resolve(res);
            });
        });
        
        res.status(status);
        res.json({ status: status, message: result });
    });

    //  get user details from database
    app.post('/users', async(req, res) => {
        let status = 200;
        const result = await new Promise((resolve, reject) => {
            db.query(`SELECT DISTINCT user_id, user_name, user_email, user_createddate FROM tbl_users WHERE user_email='${req.body.useremail}' AND user_password='${req.body.userpass}'`, function(err, res) {
                if (err) return reject(err);
                resolve(res);
            });
        });

        if(result.length !== 0) {
            status = 200;
        } else {
            status = 400;
        }

        res.status(status);
        res.json({ status: status, message: result });
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
            }
        );
        res.status(200);
        res.json({ status: '200', message: "success" });
    });

    //  get order details based on userid
    app.post('/orders', (req, res) => {
        let temp = [], id = req.body.id;
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
                res.status(200);
                res.json({ status: '200', message: temp });
            } else {
                res.status(400);
                res.json({ status: '400', message: [] });
            }
        }, 5);
    });

    app.listen(PORT, () => {
        console.log(
          '\n\x1b[42m%s\x1b[0m', 'API SERVER V1.0.0', 
          '\nAPI server for managing database for shopping cart application',
          '\n\x1b[32mApp listening on PORT\x1b[0m', `${PORT}`, 
        );
        console.log('\n\x1b[36m%s\x1b[0m', 'Press CNTRL+C to stop ...');
    });
});