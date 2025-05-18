var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var K=Arr.shift()-0;
   if(K==0)break;
   var arr=Arr.shift().split(" ").map(Number);
   var sum=arr.reduce(function(a,b){return a+b;});
   console.log(sum/(K-1));
}