var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var t=Arr.shift()-0;
   if(t==0)break;
   var n=Arr.shift()-0;
   var sum=0;
   for(var i=0;i<n;i++){
      var arr=(Arr.shift()).split(" ").map(Number);
      sum+=arr[1]-arr[0];
   }
   console.log((t<=sum)?"OK":t-sum);
}