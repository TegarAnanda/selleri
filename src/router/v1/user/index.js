const route = require("express").Router();

route.use("/product", require("./product"));

module.exports = route;