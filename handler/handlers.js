const errors = require("../lib/http-errors");
const utils = require("../lib/utils");

async function ReverseWordsHandler(req, res) {
  const sentence = req.query.sentence;
  if (!sentence) {
    res.status(404).json(errors.HttpError404);
    return;
  }

  res.status(200).json(utils.ExclusiveWordReverse(sentence));
}

async function SortWordsHandler(req, res) {
  const sentence = req.query.sentence;
  if (!sentence) {
    res.status(404).json(errors.HttpError404);
    return;
  }

  res.status(200).json(utils.ExclusiveWordSort(sentence));
}

async function CalculateAfterTaxIncomeHandler(req, res) {
  const query = req.query.annualBaseSalary;
  if (!query) {
    res.status(404).json(errors.HttpError404);
    return;
  }

  const salary = parseFloat(query);
  if (isNaN(salary)) {
    res.send(400).json(errors.HttpError400);
  }

  const taxes = utils.CalculateTaxes(salary);

  res.json({
    baseSalary: salary,
    superannuation: utils.CalculateSuperannuation(salary),
    taxes: taxes,
    afterTaxIncome: salary - taxes.total,
  });
}

async function CalculatePreTaxIncomeHandler(req, res) {
  const query = req.query.postTaxSalary;
  if (!query) {
    res.status(404).json(errors.HttpError404);
    return;
  }

  const takeHome = parseFloat(query);
  if (isNaN(takeHome)) {
    res.send(400).json(errors.HttpError400);
  }

  let income = utils.CalculateSalary(takeHome);
  if (isNaN(income)) {
    res.send(500).json(errors.HttpError500);
  }

  income = utils.AddCentsToIncome(takeHome, income);

  const taxes = utils.CalculateTaxes(income);

  res.json({
    baseSalary: income,
    superannuation: utils.CalculateSuperannuation(income),
    taxes: taxes,
    afterTaxIncome: income - taxes.total,
  });
}

module.exports = {
  ReverseWordsHandler,
  SortWordsHandler,
  CalculateAfterTaxIncomeHandler,
  CalculatePreTaxIncomeHandler,
};
