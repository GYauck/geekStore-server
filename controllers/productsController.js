const { Product } = require("../models");

exports.createProduct = (req, res) => {
  const { name, description, image_URL, price } = req.body;

  Product.findOne({
    where: {
      name: name,
      description: description,
      image_URL: image_URL,
    },
  }).then((product) => {
    if (!product) {
      Product.create({
        name,
        description,
        image_URL,
        price,
      })
        .then(() => res.sendStatus(201))
        .catch((err) => console.log(err));
    } else {
      product.update({ stock: product.stock + req.body.stock });
      res.send({ body: "Item added to stock" });
    }
  });
};

exports.getProduct = (req, res) => {
  const { productId } = req.query;

  Product.findAll({ where: { id: productId } })
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
};

exports.getAllProducts = (req, res) => {
  Product.findAll()
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
};

exports.updateProduct = (req, res) => {
  const id = req.params.id;
  Product.update(req.body, { where: { id: id } })
    .then(() => res.sendStatus(204))
    .catch((err) => console.log(err));
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.destroy({ where: { id: id } })
    .then(() => res.sendStatus(201))
    .catch((err) => console.log(err));
};
