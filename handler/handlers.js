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

module.exports = { ReverseWordsHandler, SortWordsHandler };
