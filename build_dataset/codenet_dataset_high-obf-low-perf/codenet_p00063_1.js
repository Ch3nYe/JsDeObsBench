var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var cnt=0;
Arr.forEach(function(v){
var str=v.split("").reverse().join("");
if(str==v)cnt++;
});
console.log(cnt);