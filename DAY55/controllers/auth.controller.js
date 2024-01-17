const model = require("../models/index");
const User = model.User;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const { string } = require("yup");
module.exports = {
  index: async (req, res) => {
    res.redirect("/auth/login");
  },
  login: (req, res) => {
    // if (req.session.logIn) {
    //   return res.redirect("/");
    // }
    const register = req.flash("register")[0];
    const login = req.flash("login")[0];

    res.render("auth/login", { req, login, register });
  },
  handleLogin: async (req, res, next) => {
    const body = await req.validate(req.body, {
      email: string().required("Yêu cầu nhập email!"),
      password: string().required("Yêu cầu nhập mật khẩu!"),
    });
    if (body) {
      const { email, password } = req.body;
      const account = await User.findOne({
        where: { email },
      });
      if (!account || !bcrypt.compare(password, account.dataValues.password)) {
        req.flash("login", "Email hoặc mật khẩu không đúng!");
        return res.redirect("/auth/login");
      }
      req.session.logIn = {
        email,
        name: account.dataValues.name,
      };
      return res.redirect("/");
    } else res.redirect("/auth/login");
  },
  register: (req, res) => {
    // if (req.session.logIn) {
    //   return res.redirect("/");
    // }
    res.render("auth/register", { req });
  },
  handleRegister: async (req, res) => {
    const body = await req.validate(req.body, {
      name: string().required("Yêu cầu nhập tên!"),
      email: string()
        .required("Yêu cầu nhập email!")
        .test("check-email", "email da ton tai", async (value) => {
          const account = await User.findOne({
            where: { email: value },
          });
          return !account;
        }),
      password: string().required("Yêu cầu nhập mật khẩu!"),
    });
    if (body) {
      const { name, email, password } = req.body;
      const bcryptPassword = await bcrypt.hash(password, saltRounds);
      await User.create({
        name,
        email,
        password: bcryptPassword,
      });
      req.flash("register", "Đăng kí tài khoản thành công!");
      return res.redirect("/");
    } else res.redirect("/auth/register");
  },
};
