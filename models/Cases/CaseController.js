const express = require("express");
const router = express.Router();
const Case = require("./Case");

router.get("/cases", (req, res) => {
  Case.findAndCountAll({
    offset: 0, //is going return from zero
    limit: 99,

  }).then(info => {
    res.render("cases", { info, details: false });
  })
});

router.get("/newcase", (req, res) => {
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

router.get("/cases/details/:id", (req, res) => {
  Case.findAndCountAll({
    offset: 0, //is going return from zero
    limit: 1,
  }).then(info => {
    res.render("details", { info, details: true });
  })
});

module.exports = router;