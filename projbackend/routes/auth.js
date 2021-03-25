var express = require("express");
var router = express.Router();
const { signout, signup } = require("../controllers/auth");
const { check } = require("express-validator");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("must be at least 3 chars longgg"),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be atleast 3 char").isLength({ min: 3 }),
  ],
  signup
);

router.get("/signout", signout);

module.exports = router;
