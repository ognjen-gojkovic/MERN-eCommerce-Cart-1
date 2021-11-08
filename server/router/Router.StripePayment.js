const express = require("express");
const router = express.Router();

const controllerStripe = require("../controllers/Controller.StripePayment");

router.route("/stripe-checkout").post(controllerStripe.makePayment);

module.exports = router;
