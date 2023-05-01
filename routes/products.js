const express = require("express");
const router = express.Router();

const {createProduct, getProduct, getAllProducts, updateProduct} = require("../controllers/productsController")

router.post("/createProduct", createProduct);

router.get("/getProduct", getProduct);

router.get("/getAllProducts", getAllProducts);

router.put("/updateProduct/:id", updateProduct);

module.exports = router;
