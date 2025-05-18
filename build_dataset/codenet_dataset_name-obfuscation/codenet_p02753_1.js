"use strict;";
main(
  require("fs")
    .readFileSync("/dev/stdin", "UTF-8")
    .trim()
    .split("\n")
);
function main(input) {
  input = input[0].split("");
  let num = 2;
  let isSame = true;
  while (num > 0) {
    if (input[num] !== input[0]) {
      isSame = false;
      break;
    }
    num--;
  }
  console.log(isSame ? "No" : "Yes");
}
