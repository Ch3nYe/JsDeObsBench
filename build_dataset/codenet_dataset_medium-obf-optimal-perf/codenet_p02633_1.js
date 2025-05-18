"use strict";

const main = (arg) => {
  let X = parseInt(arg);
  let result = 360 / X;
  result = String(result);
  var answer = result.replace(".", "");
  console.log(answer);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));