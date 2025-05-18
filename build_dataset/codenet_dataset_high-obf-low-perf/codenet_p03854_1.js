"use strict";
function Main(input) {
  const arr = ["dream", "dreamer", "erase", "eraser"];

  for (let i in arr) {
    arr[i] = reverse(arr[i]);
  }
  input = reverse(input);
  while (input.length > 0) {
    let flag = false;
    for (let s of arr) {
      // console.log(
      //   `input: ${input.slice(0, s.length)}, s: ${s}, length: ${s.length}`
      // );
      if (input.slice(0, s.length) == s) {
        input = input.substr(s.length);
        flag = true;
      }
    }
    if (flag == false) break;
  }
  if (input.length <= 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

function reverse(str) {
  return str.split("").reverse().join("");
}

Main(require("fs").readFileSync("/dev/stdin", "utf-8"));
