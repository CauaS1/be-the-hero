const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/db");

//controllers
const Account = require("./models/Account/Account");
const accountController = require("./models/Account/AccountController");

//View Engine
app.set("view engine", "ejs");
app.use(express.static("public"));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//database
connection
  .authenticate()
  .then(() => {
    console.log("Success!");
  })
  .catch(error => {
    console.log(`You got an error ${error}`);
  })

app.use("/", accountController);  

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(5500);