const route = require("express").Router();

const productController = require("./../../../controller/product_controller");

route.get("/product/:id", productController.getProductById);

module.exports = route;