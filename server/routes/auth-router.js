const express = require('express');
const router = express.Router();
// const { home } = require('../Controllers/auth-controller'); 
 // Destructure 'home' from the exported object
 const authController = require('../Controllers/auth-controller');

router.route("/").get(authController.home); 
router.route("/register").post(authController.register);  

// router.route("/register").get(register)
module.exports = router;
