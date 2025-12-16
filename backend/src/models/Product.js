const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  title: DataTypes.STRING,
  price: DataTypes.INTEGER,
  description: DataTypes.TEXT,
  image: DataTypes.STRING
});

module.exports = Product;
