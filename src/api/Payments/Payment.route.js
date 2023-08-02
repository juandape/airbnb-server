const router = require('express').Router();
const paymentsController = require('./Payment.controller');

router.route('/').get(paymentsController.list);
router.route('/').post(paymentsController.create);

module.exports = router;
