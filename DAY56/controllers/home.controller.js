const model = require("../models/index");
module.exports = {
  index: (req, res, next) => {
    if (req.session.logIn) {
      const name = req.session.logIn.name;
      res.render("index", { name });
    } else {
      res.redirect("/auth");
    }
  },
  logout: (req, res) => {
    req.session.logIn = null;
    return res.redirect("/auth");
  },
};
