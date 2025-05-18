'use strict'
let input = require("fs").readFileSync("/dev/stdin", "utf8");
const Nums = input.split('\n');
const S = Nums[0].split("");
const T = Nums[1].split("");
let ans = 0;
S.forEach((x,i)=> {
	if(x==T[i]){
    	ans++;
    }
});
console.log(ans);