const router = require("express").Router();
const contactController = require("../../controllers/contactController");


router.route("/main")
  .post(contactController.create);


module.exports = router;
