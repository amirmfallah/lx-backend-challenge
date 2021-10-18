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

const medicareBrackets = [
  {
    start: 21336,
    end: 26668,
    rate: 0.1,
  },
  {
    start: 26668,
    end: Infinity,
    rate: 0.02,
  },
];

const superannuationRate = 0.095;

const lowestSalary = 0;
const highestSalary = 100000000;

module.exports = {
  punctuations,
  roundOffset,
  taxBrackets,
  medicareBrackets,
  superannuationRate,
  lowestSalary,
  highestSalary,
};
