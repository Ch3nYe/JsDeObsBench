var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n=arr.shift()-0;
var v=arr.shift().split(" ").map(Number);
var sum=0;
for(var i=0;i<n;i++){
   sum+=v[i]-(i+1);
}
console.log(sum);
