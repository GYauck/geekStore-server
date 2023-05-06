const { Product, Brand } = require("../models");

exports.createProduct = (req, res) => {
  const { name, description, image_URL, price, brand } = req.body;
  const stock = Number(req.body.stock)

  Product.findOne({
    where: {
      name: name,
    },
  }).then((product) => {
    if (!product) {
      Product.create(
        {
          name,
          description,
          image_URL,
          price,
          stock,
        },
        { raw: true }
      )
        .then((product) => {
          return Brand.findOne({ where: { name: brand } }).then((brand) => {
            brand.addProduct(product);
          });
        })
        .catch((err) => console.log(err));
    } else {
      product.update({ stock: product.stock + stock });
      res.send({ body: "Item added to stock" });
    }
  });
};


exports.getAllProducts = (req, res) => {
  Product.findAll({include: {model: Brand}})
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
