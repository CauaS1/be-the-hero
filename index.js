const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/db");
const session = require("express-session");

//controllers
const Account = require("./models/Account/Account");
const accountController = require("./models/Account/AccountController");

const Case = require("./models/Cases/Case");
const caseController = require("./models/Cases/CaseController");

//View Engine
app.set("view engine", "ejs");
app.use(express.static("public"));

//Session
app.use(session({
  secret: "dsadiunfhiosdufhnsadnf",
  cookie: { maxAge: 7200000 },
  resave: true,
  saveUninitialized: true
}))

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
app.use("/", caseController);

//Session test to see if it's working
// app.get("/test-s", (req, res) => {
//   req.session.test = "Its working";
//   res.send("Session created")
// })

// app.get("/work", (req, res) => {
//   res.json({ aa: req.session.test })
// })

app.listen(5500);