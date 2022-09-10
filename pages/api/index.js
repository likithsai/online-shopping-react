//  index.js

import DB from './includes/DB';

export default function DBStatus(req, res) {
    var status = 200, message = '';

    DB.connect((err) => {
        if(err) {
            res.status(400).send({ status: 400, message: 'Database connection failed: ' + err.message });
        } else {
            res.status(200).send({ status: 200, message: 'Database connection success' });
        }
    });
}