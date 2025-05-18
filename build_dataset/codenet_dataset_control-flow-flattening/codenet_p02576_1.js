"use strict";

function main(input) {
  input = input.trim().split(" ");
  const N = Number(input[0]);
  const X = Number(input[1]);
  const T = Number(input[2]);
  let ans = 0;

  let i;
  for (i = 0; ans < N; i++) {
    ans += X;
  }

  console.log(T * i);
}

function numberSort(array) {
  array.sort(f);
  return array;
}

var f = function (a, b) {
  return a - b;
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
