var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
arr=arr.map(v=>v.split(" ").map(Number));
var [n,t]=arr.shift();
var max=0;
arr.forEach(v=>{
   max=Math.max(max,v[1]/v[0]);
});
console.log((max*t).toFixed(6));
