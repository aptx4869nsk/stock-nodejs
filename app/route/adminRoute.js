const router = require('express').Router();
const authController = require('./../controller/admin/authController');

router.post('/login',authController.login);
// router.post('/logout',authController.protect,authController.logout);

module.exports = router