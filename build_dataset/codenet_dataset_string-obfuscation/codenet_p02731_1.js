"use strict";
function Main(input) {
  input = input.split("\n");
  var volume=input/3*input/3*input/3;
  console.log(volume.toFixed(12));
}


Main(require("fs").readFileSync("/dev/stdin", "utf8"));