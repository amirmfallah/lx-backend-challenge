// Decimal.js library used to do decimal calculations
const Decimal = require("decimal.js");

function sub(a, b) {
  return parseFloat(new Decimal(a).sub(b));
}

function add(a, b) {
  return parseFloat(new Decimal(a).add(b));
}

function times(a, b) {
  return parseFloat(new Decimal(a).times(b));
}

function mod(a, b) {
  return parseFloat(Decimal.mod(a, b));
}

function div(a, b) {
  return parseFloat(new Decimal(a).div(b));
}

module.exports = {
  sub,
  add,
  times,
  div,
  mod,
};
