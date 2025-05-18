var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var p=Arr.shift().split(" ").map(Number);
   var j=Arr.shift().split(" ").map(Number);
   var sum=p.reduce(function(a,b){return a+b;});
   j.sort(function(a,b){return b-a;});
   var max=sum*n;
   while(true){
      if(j.length==0)break;
      n--;
      max=Math.max(max,(sum+j.shift())*n);
   }
   console.log(max);
}