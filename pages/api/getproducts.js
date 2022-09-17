//  products.js
import product from "../../data/data.json";

export default async function products(req, res) {
    let id = req.body.productid || null;
    res.status(200).json({ status: "200", message: [product][0].products.filter((o) => o.itemid === id) });
}
