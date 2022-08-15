const productService = require("./../services/product_service");
const categoryService = require("./../services/category_service");
const { categoryStatus: categoryStatusEnum } = require("./../utils/constant/category_constant");

async function getProducts() {

}

async function getProductById(req, res) {
    let published;
    let categoryStatus;
    if (req.user.role === "user") {
        published = true;
        categoryStatus = categoryStatusEnum.ACTIVE
    }
    const product = await productService.getProductById(id, published);
    const category = await categoryService.getCategoryById(product.categoryId, categoryStatus);
    let result = product;
    result.category = category.title;

    return res.send(result);
}

module.exports = {
    getProducts,
    getProductById
}