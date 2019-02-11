const path = require('path');
const Product = require("../models/product.model");

exports.getAddProducts = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
}

exports.postAddProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    // products.push({ title: req.body.title });
    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', { 'pageTiltle': 'Shop', 'prods': products, 'path': '/', 'hasProducts': products.length > 0, 'activeShop': true, 'productCSS': true });
}