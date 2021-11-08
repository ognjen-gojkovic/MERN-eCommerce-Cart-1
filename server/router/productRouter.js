const express = require("express");
const router = express.Router();

const controllersProducts = require("../controllers/ControllersProduct");

/**
 * @desc    GET all products from DB
 * @route   GET /api/products
 * @access  Public
 */
router.get("/", controllersProducts.getAllProducts);

/**
 * @desc    GET a products by id from DB
 * @route   GET /api/products/:id
 * @access  Public
 */
router.get("/:id", controllersProducts.getProductById);

module.exports = router;
