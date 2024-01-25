var express = require("express");
var router = express.Router();
const homeController = require("../controllers/home.controller");

/* GET home page. */
router.get("/", homeController.index);
router.get("/send-mail", homeController.sendMail);
router.post("/send-mail", homeController.handleSendMail);
router.get("/detail/:id", homeController.detail);
router.post("/delete/:id", homeController.delete);
router.get("/check/:id", homeController.check);

module.exports = router;
