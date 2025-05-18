"use strict";

let input = require("fs").readFileSync("/dev/stdin", "utf8");
const info = input.trim().split('\n');
const nums = info[1].split(' ').map(x => x*1);
// 平均値出す
const ave = Math.round( nums.reduce((x,a) => {return a += x}) / info[0] );
let sum = 0;
for(let i = 0; i < info[0]; i++){
  sum += Math.pow( nums[i] - ave ,2 )
}
console.log(sum);