const express = require("express");
const router = express.Router();
const Case = require("./Case");
const Account = require("../Account/Account");
const Authenticator = require("../../middlewares/authenticatePermission");

router.get("/cases", Authenticator, (req, res) => {
  Case.findAndCountAll({
    offset: 0, //is going return from zero
    limit: 99,
  }).then(info => {
    res.render("cases", { info, sessionName: req.session.account , details: false });
  })
});

router.get("/newcase", Authenticator,(req, res) => {
  res.render("new");
})

router.post("/new", (req, res) => {
  const { title, description, price } = req.body;
  Case.create({
    title, description, price
  }).then(() => {
    res.redirect("/cases");
  })
});

router.get("/cases/details/:id", Authenticator ,(req, res) => {
  const { id } = req.params;
  Case.findOne({
    where: { id: id }
  }).then(info => {
    Account.findOne({
      where: { email: req.session.account.email }
    }).then(infoAccount => {
      res.render("details", { info, details: true, infoAccount });
      // res.json({ info, infoAccount });
    });
  })
});

router.post("/delete", (req, res) => {
  const { id } = req.body;
  if (id != undefined) {
    if (!isNaN(id)) {
      Case.destroy({
        where: { id: id }
      }).then(() => {
        res.redirect("/cases");
      });
    } else {
      res.redirect("/cases");
    }
  } else {
    res.redirect("/cases");
  }
})

module.exports = router;