var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
Arr.forEach(function(v){
   var arr=v.split(" ").map(Number);
   var m=Math.max(arr[0],arr[1]);
   var n=Math.min(arr[0],arr[1]);
   while(n!=0){
      var N=n;
      n=m%n;
      m=N;
   }
   console.log(m);
});