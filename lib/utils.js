const decimalUtils = require("./decimalUtils");
const configs = require("./configs");

function ExclusiveWordReverse(str) {
  return exclusiveWordReverse(str, 0);
}

function exclusiveWordReverse(str, i) {
  if (i == configs.punctuations.length) {
    return str.split("").reverse().join("");
  }

  let slices = [];
  str.split(configs.punctuations[i]).forEach((element) => {
    slices.push(exclusiveWordReverse(element, i + 1));
  });

  return slices.join(configs.punctuations[i]);
}

function ExclusiveWordSort(str) {
  return exclusiveWordSort(str, 0);
}

// Recursive function to sort words
function exclusiveWordSort(str, i) {
  if (i == configs.punctuations.length) {
    return str
      .split("")
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .join("");
  }

  let slices = [];
  str.split(configs.punctuations[i]).forEach((element) => {
    slices.push(exclusiveWordSort(element, i + 1));
  });

  return slices.join(configs.punctuations[i]);
}

function CalculateSuperannuation(salary) {
  return AtoRound(decimalUtils.times(0.095, salary), 0.01);
}

function CalculateMedicare(salary) {
  if (salary < 21336) {
    return 0;
  } else if (salary >= 21336 && salary < 26668) {
    return AtoRound(decimalUtils.times(0.1, salary - 21336), 0.01);
  } else {
    return AtoRound(decimalUtils.times(0.02, salary), 0.01);
  }
}

function CalculateIncomeTax(salary, exclusiveRounded = true) {
  salary = Math.floor(salary);
  let total = 0;

  for (let i = 0; i < configs.taxBrackets.length; i++) {
    const range = configs.taxBrackets[i];

    if (salary > range.end) {
      total += decimalUtils.times(range.end - range.start, range.rate);
    } else if (salary <= range.end) {
      total += decimalUtils.times(salary - range.start, range.rate);
      return AtoRound(total, 1, exclusiveRounded);
    }
  }

  return AtoRound(total, 1, exclusiveRounded);
}

function CalculateTaxes(salary, exclusiveRounded = true) {
  const taxesIncome = CalculateIncomeTax(salary, exclusiveRounded);
  const taxesMedicare = CalculateMedicare(salary);
  const taxesTotal = Math.round(taxesIncome + taxesMedicare);

  return {
    income: taxesIncome,
    medicare: taxesMedicare,
    total: taxesTotal,
  };
}

function AtoRound(num, accuracy, exclusive = false) {
  let decimal = decimalUtils.mod(num, accuracy);
  let whole = decimalUtils.sub(num, decimal);
  let offset = exclusive ? 0.159 : configs.roundOffset;
  return whole + (decimalUtils.div(decimal, accuracy) > offset ? accuracy : 0);
}

function CalculateSalaryBeforeTax(takeHome) {
  takeHome = Math.floor(takeHome);

  let lowestSalary = 0;
  let highestSalary = 1000000000;

  while (lowestSalary <= highestSalary) {
    let middleSalary = parseInt((highestSalary + lowestSalary) / 2);
    let middleTakeHome =
      middleSalary - CalculateTaxes(middleSalary, false).total;

    if (middleTakeHome < takeHome) {
      lowestSalary = middleSalary + 1;
    } else if (middleTakeHome > takeHome) {
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
  AtoRound,
  ExclusiveWordReverse,
  ExclusiveWordSort,
  CalculateSuperannuation,
  CalculateMedicare,
  CalculateIncomeTax,
  CalculateSalaryBeforeTax,
  CalculateTaxes,
  AddCentsToIncome,
};
