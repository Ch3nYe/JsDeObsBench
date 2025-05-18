var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==0)break;
   var a = arr.shift().split(" ").map(Number);
   var sum = a.reduce((a,b)=>a+b);
   console.log(a.filter(v => v<=sum/n).length);
}
