// request
// validate---> rule --> thong qua action cua controller
// error

const { object } = require("yup");

// flash
module.exports = (req, res, next) => {
  //Dinh nghia ham validate su dung ben controller
  req.validate = async (data, rules = {}) => {
    const schema = object(rules);
    try {
      const body = await schema.validate(data, {
        abortEarly: false,
      });
      return body;
    } catch (e) {
      const errors = Object.fromEntries(
        e.inner.map((item) => [item.path, item.message])
      );
      req.flash("errors", errors);
      req.flash("old", data);
    }
  };
  //luu loi neu validate false vao request de hien thi vao view
  const errors = req.flash("errors");
  req.errors = errors.length ? errors[0] : {};
  const old = req.flash("old");
  req.old = old.length ? old[0] : {};
  next();
};
