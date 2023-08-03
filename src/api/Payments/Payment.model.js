const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
  cardBrand: {
    type: String,
    required: false,
  },
  cardNumber: {
    type: String,
    required: false,
  },
  cardExpMonth: {
    type: String,
    required: false,
  },
  cardExpYear: {
    type: String,
    required: false,
  },
  cardCvc: {
    type: String,
    required: false,
  },
  cardPostalCode: {
    type: String,
    required: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: false,
  },
});

const Payments = model('Payments', paymentSchema);

module.exports = Payments;
