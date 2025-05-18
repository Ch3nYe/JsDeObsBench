var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var abc=[[],[],[]];
var obj={};
for(var i=0;i<Arr.length;i++){
   var arr=Arr[i].split(" ").map(Number);
   abc[Math.floor(i/8)].push(arr[1]);
   obj[arr[1]]=arr[0];
}
for(var i=0;i<3;i++)abc[i].sort(function(a,b){return a-b;});
console.log(obj[abc[0][0]]+" "+(abc[0][0].toFixed(2)));
console.log(obj[abc[0][1]]+" "+(abc[0][1].toFixed(2)));
console.log(obj[abc[1][0]]+" "+(abc[1][0].toFixed(2)));
console.log(obj[abc[1][1]]+" "+(abc[1][1].toFixed(2)));
console.log(obj[abc[2][0]]+" "+(abc[2][0].toFixed(2)));
console.log(obj[abc[2][1]]+" "+(abc[2][1].toFixed(2)));
var d=[];
for(var i=0;i<3;i++)d.push(abc[i][2]);
d.sort(function(a,b){return a-b;});
console.log(obj[d[0]]+" "+(d[0].toFixed(2)));
console.log(obj[d[1]]+" "+(d[1].toFixed(2)));