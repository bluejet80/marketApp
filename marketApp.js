"use strict";

const fs = require("fs");

const marketData = JSON.parse(
  fs.readFileSync("./marketdata.json", "utf8", (err, data) => {
    if (err) {
      console.log("There was an Error Reading the File!");
      return;
    }
    return data;
  })
);
