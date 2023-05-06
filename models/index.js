const User = require("../models/User");
const Product = require("../models/Product");
const Brand = require("../models/Brand");

Product.belongsTo(Brand);
Brand.hasMany(Product);

module.exports = { User, Product, Brand };
