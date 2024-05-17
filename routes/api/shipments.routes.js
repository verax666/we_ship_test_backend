module.exports = (app) => {
  const shipments = require("../../controllers/shipments.controller");

  var router = require("express").Router();

  router.get("/find", shipments.findAll);
  router.get("/find/:id", shipments.findOne);

  app.use("/api/shipments", router);
};
