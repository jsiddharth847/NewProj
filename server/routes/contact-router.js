const express = require("express");
const router = express.Router();

const { contactUsSchema } = require("../validator/validator");
const { validate } = require("../middlewares/validatorMiddleware");
const contactController = require("../Controllers/contact-controller");

router
  .route("/contact")
  .post(validate(contactUsSchema), contactController.contactUs);

module.exports = router;
