'use strict'
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let N = input.split(' ')[0]*1;
let A = input.split(' ')[1]*1;
let B = input.split(' ')[2]*1;
let dist = Math.abs(A - B)%2;
let ans = dist == 0? "Alice" : "Borys";
console.log(ans);
