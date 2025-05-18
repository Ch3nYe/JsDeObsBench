var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr= input.trim().split("\n");
var A= arr[1].split(" ").map(Number).reduce((a,b)=>a+b);
var B= arr[2].split(" ").map(Number).reduce((a,b)=>a+b);
console.log(A*B);
