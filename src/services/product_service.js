const productModel = require("./../models/product");

async function getProducts(query) {
    
};

async function getProductById(id, published) {
    try {
        let query = { id };
        if (published != null) query.published = published;
        const product = await productModel.findOne(query);
        if (!product) {
            throw new Error("product not found");
        }
    } catch(err) {
        throw new Error(err);
    }
};

module.exports = {
    getProducts,
    getProductById
}