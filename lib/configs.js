const punctuations = [",", ".", '"', "!", "?", " "];
const roundOffset = 0.5;
const taxBrackets = [
  {
    start: 0,
    end: 18200,
    rate: 0,
  },
  {
    start: 18200,
    end: 37000,
    rate: 0.19,
  },
  {
    start: 37000,
    end: 87000,
    rate: 0.325,
  },
  {
    start: 87000,
    end: 180000,
    rate: 0.37,
  },
  {
    start: 180000,
    end: Infinity,
    rate: 0.45,
  },
];

module.exports = {
  punctuations,
  roundOffset,
  taxBrackets,
};
