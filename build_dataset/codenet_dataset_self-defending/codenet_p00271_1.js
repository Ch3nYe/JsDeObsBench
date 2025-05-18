var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
for(var i=0;i<7;i++){
var arr=Arr[i].split(" ").map(Number);
console.log(arr[0]-arr[1]);
}