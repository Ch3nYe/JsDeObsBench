'use strict'
let input = require("fs").readFileSync("/dev/stdin", "utf8");
// 必要な変数に定義する
input = input.split('\n');
let info = input.shift();
let N = info.split(" ")[0]*1;
let X = info.split(" ")[1];
// 配列要素を数値に変換
let arr = input.map(x=> x*1);
let min = Math.min(...arr);
// とりあえず1つずつ要素を足したもの
let sum = arr.reduce((x,a)=> {return a+x})
// 残りで一番量が少なくて済むドーナッツに割り当てる
let ans = N + Math.floor((X - sum)/min);
console.log(ans);