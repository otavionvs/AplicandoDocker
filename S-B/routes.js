const express = require("express");
const router = express.Router();

const Products = require("./Products/products.controller");

router.use("/Products", Products);

module.exports = router;

