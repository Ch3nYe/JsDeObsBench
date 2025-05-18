var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var abo=[0,0,0,0];
Arr.forEach(function(v){
var arr=v.split(",");
if(arr[1]=="A")abo[0]++;
if(arr[1]=="B")abo[1]++;
if(arr[1]=="AB")abo[2]++;
if(arr[1]=="O")abo[3]++;
});
console.log(abo[0]);
console.log(abo[1]);
console.log(abo[2]);
console.log(abo[3]);