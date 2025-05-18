var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
Arr.forEach(function(v){
   var arr=v.split(" ").map(Number);
   var cnt=0;
   (function(xa1, ya1, xa2, ya2, xb1, yb1, xb2, yb2){
      if(xb2>=xa1 && xb1<=xa2)cnt++;
      if(yb2>=ya1 && yb1<=ya2)cnt++;
   }).apply(null,arr);
   console.log((cnt==2)?"YES":"NO");
});