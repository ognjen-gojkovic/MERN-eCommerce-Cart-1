require("dotenv").config();
const stripe = require("stripe")("sk_test_KpbzuZHWWwcgjxngYYatz4UO00j7vdTvXE");
const controllerStripe = {
  makePayment: async (req, res) => {
    try {
      console.log("req.body:", req.body);
      //console.log("stripe:", stripe);
      const { cartItems, price } = req.body;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: cartItems.map((item, idx) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
              },
              unit_amount: price / 100,
            },
            quantity: item.qty,
          };
        }),
        success_url: `${process.env.SERVER_URL}/success.html`,
        cancel_url: `${process.env.SERVER_URL}/cancel.html`,
      });

      res
        .status(200)
        .json({ success: true, msg: "Success.", url: session.url });
    } catch (error) {
      res.status(500).json({ success: false, msg: error.message });
    }
  },
};

module.exports = controllerStripe;
