const punctuations = [",", ".", '"', "!", "?", " "];
const decimalUtils = require("./decimalUtils");
const roundOffset = 0.159;

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

function ExclusiveWordReverse(str) {
  return exclusiveWordReverse(str, 0);
}

function exclusiveWordReverse(str, i) {
  if (i == punctuations.length) {
    return str.split("").reverse().join("");
  }

  let slices = [];
  str.split(punctuations[i]).forEach((element) => {
    slices.push(exclusiveWordReverse(element, i + 1));
  });

  return slices.join(punctuations[i]);
}

function ExclusiveWordSort(str) {
  return exclusiveWordSort(str, 0);
}

// Recursive function to sort words
function exclusiveWordSort(str, i) {
  if (i == punctuations.length) {
    return str
      .split("")
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .join("");
  }

  let slices = [];
  str.split(punctuations[i]).forEach((element) => {
    slices.push(exclusiveWordSort(element, i + 1));
  });

  return slices.join(punctuations[i]);
}

function CalculateSuperannuation(salary) {
  //return AtoRound(decimalUtils.times(0.095, salary), 0.1);
  return Math.round(decimalUtils.times(0.095, salary) * 100) / 100;
}

function CalculateMedicare(salary) {
  if (salary < 21336) {
    return 0;
  } else if (salary >= 21336 && salary < 26668) {
    return Math.round(decimalUtils.times(0.1, salary - 21336) * 100) / 100;
  } else {
    return Math.round(decimalUtils.times(0.02, salary) * 100) / 100;
  }
}

function CalculateIncomeTax(salary) {
  salary = Math.floor(salary);
  let total = 0;

  for (let i = 0; i < taxBrackets.length; i++) {
    const range = taxBrackets[i];

    if (salary > range.end) {
      total += decimalUtils.times(range.end - range.start, range.rate);
    } else if (salary <= range.end) {
      total += decimalUtils.times(salary - range.start, range.rate);
      return total;
    }
  }

  return total;
}

function CalculateTaxes(salary) {
  const taxesIncome = CalculateIncomeTax(salary);
  const taxesMedicare = CalculateMedicare(salary);
  const taxesTotal = Math.round(taxesIncome + taxesMedicare);

  return {
    income: taxesIncome,
    medicare: taxesMedicare,
    total: taxesTotal,
  };
}

function AtoRound(num, accuracy) {
  console.log(num);
  let decimal = decimalUtils.mod(num, accuracy);
  let whole = decimalUtils.sub(num, decimal);
  return (
    whole + (decimalUtils.div(decimal, accuracy) > roundOffset ? accuracy : 0)
  );
}

function CalculateSalary(takeHome) {
  takeHome = Math.floor(takeHome);

  let lowestSalary = 0;
  let highestSalary = 10000000;

  while (lowestSalary <= highestSalary) {
    let middleSalary = parseInt((highestSalary + lowestSalary) / 2);
    let postMid = middleSalary - CalculateTaxes(middleSalary).total;

    if (postMid < takeHome) {
      lowestSalary = middleSalary + 1;
    } else if (postMid > takeHome) {
      highestSalary = middleSalary - 1;
    } else {
      return middleSalary;
    }
  }
  return NaN;
}

function AddCentsToIncome(takehome, income) {
  const cents = decimalUtils.sub(takehome, Math.floor(takehome));
  return decimalUtils.add(cents, income);
}

module.exports = {
  ExclusiveWordReverse,
  ExclusiveWordSort,
  CalculateSuperannuation,
  CalculateSalary,
  CalculateTaxes,
  AddCentsToIncome,
};
