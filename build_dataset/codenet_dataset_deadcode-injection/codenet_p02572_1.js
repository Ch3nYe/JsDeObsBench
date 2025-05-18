"use strict";

function main(input) {
  input = input.trim().split("\n");
  const N = Number(input[0]);
  const line2_arr = input[1].split(" ");
  let ans = 0;
  for (let i = 0; i < N; i++) {
    if (Number(line2_arr[i]) == 0) continue;
    for (let j = i + 1; j < N; j++) {
      ans = ans + Number(line2_arr[i]) * Number(line2_arr[j]);
      // console.log(ans);
    }
  }
  console.log(ans % 1000000007);
}

function numberSort(array) {
  array.sort(f);
  return array;
}

var f = function (a, b) {
  return a - b;
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
