//  products.js
import product from "../../data/data.json";

export default async function products(req, res) {
    let id = req.body.productid || null;
    res.status(200).json({ 
        status: "200", 
        message: {
            currency: [product][0].currency,
            filteredProducts: [product][0].products.filter((o) => o.itemid === id),
            relateditems: [product][0].products.filter(item => item.category === [product][0].products.filter(d => d.itemid === id).category).sort(() => Math.random() - 0.5).slice(0, 4) 
        }
    });
}
