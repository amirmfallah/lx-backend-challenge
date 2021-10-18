const assert = require("assert");
const utils = require("../lib/utils");

describe("ExclusiveWordReverse", () => {
  it('ExclusiveWordReverse("LX\'s head office is located in Sydney, Australia.") should return "s\'XL daeh eciffo si detacol ni yendyS, ailartsuA."', () => {
    assert.equal(
      utils.ExclusiveWordReverse(
        "LX's head office is located in Sydney, Australia."
      ),
      "s'XL daeh eciffo si detacol ni yendyS, ailartsuA."
    );
  });
  it('ExclusiveWordReverse("The sentance "Hello World!" is often used in programming examples?") should return "ehT ecnatnes "olleH dlroW!" si netfo desu ni gnimmargorp selpmaxe?"', () => {
    assert.equal(
      utils.ExclusiveWordReverse(
        'The sentance "Hello World!" is often used in programming examples?'
      ),
      'ehT ecnatnes "olleH dlroW!" si netfo desu ni gnimmargorp selpmaxe?'
    );
  });
});

describe("ExclusiveWordSort", () => {
  it('ExclusiveWordSort("LX\'s head office is located in Sydney, Australia.") should return "\'LsX adeh ceffio is acdelot in denSyy, Aaailrstu.', () => {
    assert.equal(
      utils.ExclusiveWordSort(
        "LX's head office is located in Sydney, Australia."
      ),
      "'LsX adeh ceffio is acdelot in denSyy, Aaailrstu."
    );
  });
  it('ExclusiveWordSort("The sentance "Hello World!" is often used in programming examples?") should return "ehT aceennst "eHllo dlorW!" is efnot desu in aggimmnoprr aeelmpsx?"', () => {
    assert.equal(
      utils.ExclusiveWordSort(
        'The sentance "Hello World!" is often used in programming examples?'
      ),
      'ehT aceennst "eHllo dlorW!" is efnot desu in aggimmnoprr aeelmpsx?'
    );
  });
});

describe("CalculateSuperannuation", () => {
  it("CalculateSuperannuation(43589) should return 4140.95", () => {
    assert.equal(utils.CalculateSuperannuation(43589), 4140.95);
  });
  it("CalculateSuperannuation(85000) should return 8075", () => {
    assert.equal(utils.CalculateSuperannuation(85000), 8075);
  });
});

describe("CalculateMedicare", () => {
  it("CalculateMedicare(43589) should return 871.78", () => {
    assert.equal(utils.CalculateMedicare(43589), 871.78);
  });
  it("CalculateMedicare(85000) should return 1700", () => {
    assert.equal(utils.CalculateMedicare(85000), 1700);
  });
});

describe("CalculateIncomeTax", () => {
  it("CalculateIncomeTax(43589) should return 5714", () => {
    assert.equal(utils.CalculateIncomeTax(43589), 5714);
  });
  it("CalculateIncomeTax(85000) should return 19172", () => {
    assert.equal(utils.CalculateIncomeTax(85000), 19172);
  });
  it("CalculateIncomeTax(535635) should return 214268", () => {
    assert.equal(utils.CalculateIncomeTax(535635), 214268);
  });
});

describe("CalculateTaxes", () => {
  it("CalculateTaxes(85000) should return {income: 19172,medicare: 1700,total: 20872}", () => {
    assert.equal(utils.CalculateTaxes(85000).income, 19172);
    assert.equal(utils.CalculateTaxes(85000).medicare, 1700);
    assert.equal(utils.CalculateTaxes(85000).total, 20872);
  });
});

describe("AtoRound", () => {
  it("AtoRound(0.2, 1, false) should return 0", () => {
    assert.equal(utils.AtoRound(0.2, 1, false), 0);
  });
  it("AtoRound(0.2, 1, true) should return 1", () => {
    assert.equal(utils.AtoRound(0.2, 1, true), 1);
  });
});

describe("CalculateSalaryBeforeTax", () => {
  it("CalculateSalaryBeforeTax(64000) should return 84804", () => {
    assert.equal(utils.CalculateSalaryBeforeTax(64000), 84804);
  });
  it("CalculateSalaryBeforeTax(25000) should return 27268", () => {
    assert.equal(utils.CalculateSalaryBeforeTax(25000), 27268);
  });
});

describe("AddCentsToIncome", () => {
  it("AddCentsToIncome(100.5, 57) should return 57.5", () => {
    assert.equal(utils.AddCentsToIncome(100.5, 57), 57.5);
  });
  it("AddCentsToIncome(345.3, 1223) should return 1223.3", () => {
    assert.equal(utils.AddCentsToIncome(345.3, 1223), 1223.3);
  });
});
