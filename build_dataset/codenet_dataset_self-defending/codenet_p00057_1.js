var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
for(var i=0;i<Arr.length;i++){
   var n=(Arr[i]-0)+1;
   var x=1/2*n*(n-1);
   console.log(x+1);
}