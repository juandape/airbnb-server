const router = require('express').Router();
const userController = require('./Users.controller');
const { auth } = require('../Utils/auth');

//router.route('/').get(userController.list);
router.route('/').get(auth, userController.show);
//router.route('/').post(userController.create);
router.route('/:userId').patch(userController.update);
router.route('/:userId').delete(userController.destroy);
router.route('/signup').post(userController.signup);
router.route('/signin').post(userController.signin);

module.exports = router;
