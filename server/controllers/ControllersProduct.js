const Products = require("../models/Products");

const controllersProduct = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Products.find({});
      res.status(200).json({ success: true, products: products });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, msg: error.message });
    }
  },

  getProductById: async (req, res) => {
    try {
      const productId = req.params.id;

      const product = await Products.findById(productId);
      res.status(200).json({ success: true, product: product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, msg: error.message });
    }
  },
};

module.exports = controllersProduct;
