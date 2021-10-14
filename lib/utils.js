const punctuations = [",", ".", '"', "!", "?", " "];

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

module.exports = {
  ExclusiveWordReverse,
  ExclusiveWordSort,
};
