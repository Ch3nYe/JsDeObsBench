var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
Arr.forEach(function(v){
var a=(v.split(" "))[0]-0;
var b=(v.split(" "))[1]-0;
console.log(a+b);
});