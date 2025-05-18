"use strict";

function Main(input) {
  const ab = input.split(" ");
  console.log((parseFloat(ab[0])+parseFloat(ab[1]))/2);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
