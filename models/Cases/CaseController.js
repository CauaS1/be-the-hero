const express = require("express");
const router = express.Router();

router.get("/cases", (req, res) => {
  res.render("cases");
});

router.get("/newcase", (req, res) => {
  res.render("new");
})

module.exports = router;