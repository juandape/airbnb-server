const Payments = require('../Payments/Payment.model');
const Users = require('../Users/Users.model');
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = {
  //POST
  create: async (req, res, next) => {
    const { amount, paymentMethod } = req.body;

    try {
      console.log(
        '🚀 ~ file: payment.controller.ts:16 ~ paymentMethod:',
        paymentMethod
      );
      const { id, card } = paymentMethod;

      const payment = await stripe.paymentIntents.create({
        amount,
        payment_method: id,
        currency: 'usd',
        description: 'Airbnb payment',
      });

      const confirmPayment = await stripe.paymentIntents.confirm(payment.id);

      if (confirmPayment.status === 'succeeded') {
        // await createPayments(payment);

        return res.status(200).json({ message: 'Payment successful', payment });
      }
      return res.status(400).json({ message: 'Payment denied' });
    } catch (error) {
      return next(error);
    }
  },

  //GET
  list: async (req, res, next) => {
    try {
      const payments = await Payments.find();

      res.status(200).json({ message: 'Payments found', data: payments });
    } catch (error) {
      return next(error);
    }
  }
};
