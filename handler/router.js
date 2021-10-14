require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const handlers = require("./handlers");

router.use(cors());
app.use(express.json());

const logger = (req, res, next) => {
  console.log(
    "%s-%s-%s-%s",
    req.method,
    req.path,
    JSON.stringify(req.query),
    JSON.stringify(req.body)
  );
  next();
};

router.get("/", logger, (req, res) => {
  res.sendStatus(200);
});

app.use("/", router);
module.exports = app;
