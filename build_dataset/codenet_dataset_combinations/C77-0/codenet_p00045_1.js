var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var sum=0;
var cnt=0;

Arr.forEach(function(v){
var arr=v.split(",").map(Number);
sum+=arr[0]*arr[1];
cnt+=arr[1];
});

console.log(sum);
console.log(Math.round(cnt/Arr.length));