const express = require("express");
const router = express.Router();
const Account = require("./Account");
const bcripty = require("bcryptjs");
const crypto = require("crypto");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/create", (req, res) => {
  const { name, email, password, whatsapp, city } = req.body;
  Account.findOne({ where: { email: email }}).then(account => {
    if(account == undefined) {
      var salt = bcripty.genSaltSync(10);
      var hash = bcripty.hashSync(password, salt);

      // var id = crypto.randomBytes(3).toString('hex');

      Account.create({
        name, email, password: hash, whatsapp, city
      }).then(() => {
        res.redirect("/");
      })
    } else {
      res.redirect("/register");
    }
  }).catch(err => {
    res.redirect("/register");
    console.log(err);
  })
});



module.exports = router;

