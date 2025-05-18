var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var n = arr.shift()-0;
var max=0;
for(var i=1;i<=n;i++){
   var s = (i.toString(2) + "").split("").map(Number);
   var sum = s.reduce((a,b)=>a+b);
   max=Math.max(max,sum);
}
console.log(max);
