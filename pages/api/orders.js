//  orders.js

import DB from './includes/DB';

export default async function orders(req, res) {
    let temp = [], id = req.body.id;
    DB.query(`SELECT order_id, order_name, order_price, order_createddate FROM tbl_orders WHERE order_cusid=${id}`, function(err, res) {
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
            res.status(200).json({ status: '200', message: temp });
        } else {
            res.status(400).json({ status: '400', message: [] });
        }
    }, 5);
}