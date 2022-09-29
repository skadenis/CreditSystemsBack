"use strict";
let express = require("express");
let router = express.Router();

let Policy = require("cors");
let leadsController = require("../../controller/leads/index");

router.get("/", Policy(), async function (req, res, next) {
  let data = await new leadsController().get_all();
  res.json(data).status(data.status);
});

router.post("/filtered", Policy(), async function (req, res, next) {
  console.log(req.body);
  let data = await new leadsController().get_filtered(req.body);
  res.json(data).status(data.status);
});

router.get("/:id", Policy(), async function (req, res, next) {
  let data = await new leadsController(req.params.id).get();
  res.json(data).status(data.status);
});

router.post("/add", Policy(), async function (req, res, next) {
  let data = await new leadsController().add(req.body);
  res.json(data).status(data.status);
});

router.put("/edit", Policy(), async function (req, res, next) {
  let data = await new leadsController().edit(req.body);
  res.json(data).status(data.status);
});

router.put("/delete", Policy(), async function (req, res, next) {
  await new leadsController().delete(req.body);
  res.json({ status: 200 }).status(200);
});

module.exports = router;
