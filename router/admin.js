const express = require('express');
const path = require('path');
const productsController = require('../controllers/products.controller');


const router = express.Router();

router.get("/add-product", productsController.getAddProducts);

router.post("/add-product", productsController.postAddProducts);

exports.router = router;
