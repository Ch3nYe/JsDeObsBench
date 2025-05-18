"use strict";

function getPair(num) {
  return (
    parseInt(
      num
        .toString(2)
        .split("")
        .map(x => (x === "1" ? "0" : "1"))
        .reduce((acc, cur) => acc + cur, ""),
      2
    ) + 1
  );
}

function main(input) {
  const inputs = input.split("\n").filter(x => x !== "");

  const A = inputs[1].split(" ").map(Number);

  let sortedA = A.sort((a, b) => b - a);
  let count = 0;
  while (sortedA.length > 0) {
    let i = sortedA[0];
    sortedA.splice(0, 1);

    let j = getPair(i);

    let indexJ = sortedA.findIndex(x => x === j);

    if (indexJ >= 0) {
      sortedA.splice(indexJ, 1);
      count++;
    }
  }

  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
