const express = require("express");
const router = express.Router();
const Account = require("./Account");
const bcripty = require("bcryptjs");
const crypto = require("crypto");
const { route } = require("../Cases/CaseController");

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  Account.findOne({
    where: { email: email }
  }).then(account => {
    if (account != undefined) { //if there is a email CREATED
      var correct = bcripty.compareSync(password, account.password);
      if (correct) { //if the password is correct
        req.session.account = {
          name: account.name,
          email: account.email,
          whatsapp: account.whatsapp,
        }
        res.redirect("/cases");
      } else {
        res.redirect("/")
      }
    } else {
      res.redirect("/");
    }
    // res.json({ all })
  })
})

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/create", (req, res) => {
  const { name, email, password, whatsapp, city } = req.body;
  Account.findOne({ where: { email: email } }).then(account => {
    if (account == undefined) {
      var salt = bcripty.genSaltSync(10);
      var hash = bcripty.hashSync(password, salt);

      Account.create({
        name, email, password: hash, whatsapp, city
      }).then(() => {
        // var id = crypto.randomBytes(3).toString('hex');
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

router.get("/logout", (req ,res) => {
  req.session.account = undefined;
  res.redirect("/");
})



module.exports = router;

