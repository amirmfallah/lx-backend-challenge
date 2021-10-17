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

router.get("/reverse-words", logger, handlers.ReverseWordsHandler);
router.get("/sort-words", logger, handlers.SortWordsHandler);
router.get(
  "/calculate-after-tax-income",
  logger,
  handlers.CalculateAfterTaxIncomeHandler
);
router.get(
  "/calculate-pre-tax-income-from-take-home",
  logger,
  handlers.CalculatePreTaxIncomeHandler
);
app.use("/", router);
module.exports = app;
