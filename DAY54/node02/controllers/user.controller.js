const userModel = require("../models/user.model");
const { string } = require("yup");
module.exports = {
  index: async (req, res, next) => {
    let users = [];
    const { status } = req.query;
    const { keyword } = req.query;
    // console.log(keyword);
    try {
      users = await userModel.all(status, keyword);
      // console.log(users);
    } catch (e) {
      return next(e);
    }
    const isSuccess = req.flash("status");
    res.render("users/index", { users, status: isSuccess[0] });
  },
  add: (req, res) => {
    res.render("users/add", { req });
  },
  handleAdd: async (req, res) => {
    const body = await req.validate(req.body, {
      name: string().required("Ten bat buoc phai nhap"),
      email: string()
        .required("Email bat buoc phai nhap")
        .email("email khong dung dinh dang")
        .test("check-email", "email da ton tai", async (value) => {
          const user = await userModel.existEmail(value);
          return !user.length;
        }),
      status: string().test(
        "check-status",
        "Trang thai khong hop le",
        (value) => {
          return +value === 0 || +value === 1;
        }
      ),
    });
    try {
      await userModel.createUser(body);
      req.flash("status", "success");
      return res.redirect("/users");
    } catch {
      return res.redirect("/users/add");
    }
  },
  update: async (req, res) => {
    const userId = req.params.id;
    let data = await userModel.getUpdate(userId);
    let user = data && data.length > 0 ? data[0] : {};
    res.render("users/update", { user, req });
  },
  handleUpdate: async (req, res) => {
    const userId = req.params.id;
    const body = await req.validate(req.body, {
      name: string().required("Ten bat buoc phai nhap"),
      email: string()
        .required("Email bat buoc phai nhap")
        .email("email khong dung dinh dang")
        .test("check-email", "email da ton tai", async (value) => {
          const user = await userModel.existEmail(value);
          return !user.length;
        }),
      status: string().test(
        "check-status",
        "Trang thai khong hop le",
        (value) => {
          return +value === 0 || +value === 1;
        }
      ),
    });
    try {
      await userModel.update(userId, body);
      req.flash("status", "updated");
      return res.redirect("/users");
    } catch {
      return res.redirect("/users/update/" + userId);
    }
  },
  delete: async (req, res) => {
    const userId = req.params.id;
    let data = await userModel.getUpdate(userId);
    let user = data && data.length > 0 ? data[0] : {};
    res.render("users/delete", { user, req });
  },
  handleDelete: async (req, res) => {
    const userId = req.params.id;
    await userModel.deleteUser(userId);
    req.flash("status", "deleted");
    return res.redirect("/users");
  },
};
