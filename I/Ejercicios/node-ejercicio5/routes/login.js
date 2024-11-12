var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("login", { 
    title: "FRC/Login",
    user_wlc: "Welcome",
    user_mssg: "sign up to continue",
    submit: "Submit →",
   });
});

module.exports = router;
