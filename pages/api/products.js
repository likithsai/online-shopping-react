//  products.js
import product from "../../data/data.json";

export default async function products(req, res) {
    res.status(200).json({ status: "200", message: product });
}
