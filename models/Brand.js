const { Model, DataTypes } = require("sequelize");
const db = require("../db");

class Brand extends Model {}

Brand.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo_URL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "brand",
  }
);

module.exports = Brand;
