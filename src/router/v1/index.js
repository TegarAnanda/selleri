const route = require("express").Router();

route.use("/user", require("./user"));
// route.use("/admin", require("./admin"));

module.exports = route;