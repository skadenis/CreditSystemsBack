let express = require("express");
let router = express.Router();

let Policy = require("cors");
let usersController = require("../../controller/user/index");

/* GET home page. */
router.post("/", Policy(), async function (req, res, next) {
  let data = await new usersController().auth(req.body);
  res.json(data).status(data.status);
});

module.exports = router;
