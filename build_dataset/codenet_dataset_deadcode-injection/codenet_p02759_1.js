'use strict';
function main(input) {
  input = input.split("\n");
  const a = parseInt(input[0], 10);
  
  console.log(Math.round(a / 2));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));