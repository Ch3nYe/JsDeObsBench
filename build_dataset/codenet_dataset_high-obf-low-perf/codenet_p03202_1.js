"use strict";
function main(input) {
  const inputs = input.split("\n").filter(x => x !== "");

  const n = inputs[0];
  const a = inputs[1].split(" ").map(x => Number(x));

  let result = 1;
  while (testN(result, a) === false) {
    result = result + 1;
  }

  console.log(result);

  function testN(n, a) {
    let current = "0".repeat(a[0]);

    for (let i = 1; i < a.length; i++) {
      if (a[i - 1] < a[i]) {
        current = current + "0".repeat(a[i] - a[i - 1]);
      } else {
        current = parseInt(current.substring(0, a[i]), n) + 1;
        if (isNaN(current)) {
          return false;
        }

        current = "" + current;
        if (current.length > a[i]) {
          return false;
        } else {
          current = "0".repeat(a[i] - current.length) + current;
        }
      }
    }
    return true;
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
