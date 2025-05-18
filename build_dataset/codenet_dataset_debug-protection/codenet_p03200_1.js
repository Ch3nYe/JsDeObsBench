"use strict";
function main(input) {
  const inputs = input.split("\n").filter(x => x !== "");
  const s = inputs[0];

  const result = s
    .split("")
    .map((input, index) => (input === "W" ? index : -1))
    .filter(x => x !== -1)
    .reduce((acc, cur, index) => acc + cur - index, 0);

  console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
