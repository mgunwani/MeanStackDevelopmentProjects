
var Product = require('../models/product');

exports.findAll = (req, res) => {
    Product.find((err, products) => {
        if (err) throw err;
        res.send(products);
        res.end();
    })
};

exports.findByName = (req, res) => {
    Product.findById(req.params.name, (err, product) => {
        if (err) throw err;
        res.send(product);
        res.end();
    })
};

exports.findById = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
        res.end();
    })
}

exports.findByCompanyId = (req, res) => {
    Product.find({ company: req.params.companyId }).exec((err, products) => {
        if (err) throw err;
        res.send(products);
        res.end();
    })
};