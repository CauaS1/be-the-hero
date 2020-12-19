const whats = document.querySelector(".whatsapp");
const email = document.querySelector(".email");

email.addEventListener("click", () => {
  function whats(req, res, next) {
    var yourEmail = req.session.account;
    console.log(yourEmail);
  }
});

whats.addEventListener("click", (req, res, next) => {
  var yourWhats = req.session.account.whatsapp;
  alert(yourWhats);
});

//see it later

