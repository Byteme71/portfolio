const router = require("express").Router();
const contactController = require("../../controllers/contactController");

// Matches with "/api/articles"
router.route("/contact")
  .get(contactController.findAll)
  .post(contactController.create);



module.exports = router;
