var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
Arr.forEach(function(v){
   var arr=[0,v];
   for(var i=2;i<=10;i++){
         arr[i]=(i%2==0)?arr[i-1]*2 : arr[i-1]/3;
   }
   var sum=arr.reduce(function(a,b){return a+b;});
   console.log(sum.toFixed(8));
});