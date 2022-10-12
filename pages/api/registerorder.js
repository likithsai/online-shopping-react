//  registerorder.js

import DB from './includes/DB';

export default async function registerorder(req, res) {
    let status = 200, result = [];

    if(Object.keys(req.body).length !== 0) {
        result = await new Promise((resolve, reject) => {
            DB.query(
                `INSERT INTO tbl_orders(order_name, order_cusid, order_price) VALUES(
                    '${req.body.ordername}', 
                    ${req.body.ordercusid}, 
                    ${req.body.orderprice}
                )`,
                function (err, res) {
                    if (err) return reject(err);
                    resolve(res);
                }
            );
        });
    }

    res.status(status).json({ status: status, message: result });
}
