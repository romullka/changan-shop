const Product = require('../models/Product');

exports.create = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

exports.getAll = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};
