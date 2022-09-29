"use strict";
let express = require("express");
let router = express.Router();

let Policy = require("cors");
let banksController = require("../../controller/banks/index");

let productRouter = require("../products/index");

router.use("/product", productRouter);

router.get("/", Policy(), async function (req, res, next) {
  let data = await new banksController().get_all();
  res.json(data).status(data.status);
});

router.get("/:id", Policy(), async function (req, res, next) {
  let data = await new banksController(req.params.id).get();
  res.json(data).status(data.status);
});

router.post("/add", Policy(), async function (req, res, next) {
  console.log(req.body);
  let data = await new banksController().add(req.body);
  res.json(data).status(data.status);
});

router.put("/edit", Policy(), async function (req, res, next) {
  let data = await new banksController().edit(req.body);
  res.json(data).status(data.status);
});

router.put("/delete", Policy(), async function (req, res, next) {
  await new banksController().delete(req.body);
  res.json({ status: 200 }).status(200);
});

module.exports = router;
