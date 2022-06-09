const { exportAllDeclaration } = require("@babel/types");
const { calcAvg, calcIndex, calcMarketValue } = require("./app");

test("Should return the average of two numbers", () => {
  expect(calcAvg(15, 30)).toBe(22.5);
});

test("If start is less than 50, subtract 10, otherwise add 10", () => {
  expect(calcIndex(50, 23, 10)).toBe(40);
});
test("If start is less than 50, subtract 10, otherwise add 10", () => {
  expect(calcIndex(50, 70, 10)).toBe(60);
});

test("Test market value function", () => {
  expect(calcMarketValue(34, 72, 50)).toBe(12);
});
