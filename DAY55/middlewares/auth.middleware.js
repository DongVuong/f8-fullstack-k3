const { path } = require("../app");

module.exports = (req, res, next) => {
  const url = req.url;
  if (
    (url === "/auth/login" && req.session.logIn) ||
    (url === "/auth/register" && req.session.logIn)
  ) {
    return res.redirect("/");
  }
  next();
};
