const sendMail = require("../utils/mail");
const { History } = require("../models/index");
const { string } = require("yup");

module.exports = {
  index: async (req, res, next) => {
    const data = await History.findAll({
      order: [
        ["created_at", "desc"],
        ["id", "desc"],
      ],
    });
    res.render("index", { data, req });
  },
  sendMail: async (req, res, next) => {
    res.render("sendMail", { req });
  },
  handleSendMail: async (req, res, next) => {
    const body = await req.validate(req.body, {
      email: string().required("Email bắt buộc phải nhập"),
      title: string().required("Tiêu đề bắt buộc phải nhập"),
      content: string().required("Nội dung bắt buộc phải nhập"),
    });
    if (body) {
      const createData = await History.create(body);
      if (createData) {
        const info = await sendMail(body.email, body.title, body.content);
        if (info) {
          req.flash("msg", "Gửi thành công");
          return res.redirect("/");
        }
      }
      req.flash("error", "Gửi thất bại");
    }
    req.flash("old", req.body);

    return res.redirect("/send-mail");
  },
  detail: async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await History.findOne({
        where: {
          id,
        },
      });
      if (!data) {
        throw new Error("Không tìm thấy!");
      }
      res.render("detail", { data, req });
    } catch (e) {
      return next(e);
    }
  },
  delete: async (req, res, next) => {
    const { id } = req.params;
    const status = await History.destroy({
      where: {
        id,
      },
      // force: true, //xoa vinh vien ( gia tri mac dinh la false)
    });
    if (status) {
      req.flash("msg", "Thư đã được chuyển vào thùng rác");
    }
    return res.redirect("/");
  },
};
