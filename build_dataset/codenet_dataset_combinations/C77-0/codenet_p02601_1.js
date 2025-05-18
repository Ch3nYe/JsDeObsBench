"use strict";

function main(input) {
  input = input.trim().split("\n");
  const line_one = input[0].split(" ");
  const K = parseInt(input[1]);
  let line_one_arr = [];

  for (let i in line_one) {
    line_one_arr.push(parseInt(line_one[i]));
  }

  for (let i = 0; i < K; i++) {
    if (line_one_arr[0] >= line_one_arr[1]) {
      line_one_arr[1] = line_one_arr[1] * 2;
      continue;
    }
    if (line_one_arr[1] >= line_one_arr[2]) {
      line_one_arr[2] = line_one_arr[2] * 2;
    }
  }

  if (line_one_arr[0] < line_one_arr[1] && line_one_arr[1] < line_one_arr[2]) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function numberSort(array) {
  array.sort(f);
  return array;
}

var f = function (a, b) {
  return a - b;
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
