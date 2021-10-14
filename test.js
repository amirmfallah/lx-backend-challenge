text = "LX's head office is located in Sydney, Australia.";
wordd = 'World!"';
const punctuations = [",", ".", '"', "!", "?", " "];
console.log(word(text, 0));

function word(str, i) {
  if (i == punctuations.length) {
    return str.split("").reverse().join("");
  }

  let slices = [];
  str.split(punctuations[i]).forEach((element) => {
    slices.push(word(element, i + 1));
  });

  return slices.join(punctuations[i]);
}
