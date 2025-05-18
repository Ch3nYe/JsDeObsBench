'use strict';

const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("");

if (lines[0]===lines[1] && lines[1]===lines[2]){
  console.log(1);
}
if (lines[0]===lines[1] && lines[1]!==lines[2]){
  console.log(2);
}
if (lines[0]===lines[2] && lines[0]!==lines[1]){
  console.log(2);
}
if (lines[1]===lines[2] && lines[0]!==lines[1]){
  console.log(2);
}
if (lines[0]!==lines[1] && lines[1]!==lines[2] && lines[2]!==lines[0]) {
  console.log(3);
}