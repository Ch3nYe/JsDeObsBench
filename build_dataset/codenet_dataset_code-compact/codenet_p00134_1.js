var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
var n=Arr.shift();
var sum=0;
for(var i=0;i<n;i++){
sum+=Arr[i];
}
console.log(Math.floor(sum/n));