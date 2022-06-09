"use strict";
const getRandom = (upper, lower = 1) =>
  Math.floor(Math.random() * (upper - lower) + lower);

//console.log(getRandom(10, 5));
//console.log(getRandom(30, 20));
//console.log(getRandom(100, 90));

let indexNum = 50;
const increment = 36;
const calcIndex = (index, start, inc) =>
  start < 50 ? index + inc : index - inc;
const calcAvg = (start, index) => (start + index) / 2;
const calcMarketValue = (randNum, avg, market) =>
  randNum < avg ? market - (avg - randNum) : market + (randNum - avg);

const runMarket = function (index, inc, rep) {
  const data1 = [];
  const data2 = [];
  let market = 50;
  for (let i = 1; i < rep + 1; i++) {
    const beginNum = getRandom(100);
    const newIndex = calcIndex(index, beginNum, inc);
    const newAvg = calcAvg(beginNum, newIndex);
    const nextNum = getRandom(beginNum, newIndex);
    market = calcMarketValue(nextNum, newAvg, market);
    data1.push(market);
    data2.push(i);
  }
  return { data1, data2 };
};

const randomSeq = function (rep) {
  const data1 = [];
  const data2 = [];
  for (let i = 1; i < rep + 1; i++) {
    const num = getRandom(100);
    data1.push(num);
    data2.push(i);
  }
  return { data1, data2 };
};

const randObj = randomSeq(100);

const marketObj = runMarket(indexNum, increment, 300);
console.log(marketObj);
