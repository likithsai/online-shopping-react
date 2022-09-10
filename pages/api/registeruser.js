//  registeruser.js

import DB from './includes/DB';

export default async function registeruser(req, res) {
    let status = 200;

    const result = await new Promise((resolve, reject) => {
        DB.query(`INSERT INTO tbl_users(user_name, user_email, user_password) VALUES(
            '${req.body.username}', 
            '${req.body.useremail}', 
            '${req.body.userpass}'
        )`, function(err, res) {
            if (err) return reject(err);
            resolve(res);
        });
    });
    
    res.status(status).json({ status: status, message: result });
}