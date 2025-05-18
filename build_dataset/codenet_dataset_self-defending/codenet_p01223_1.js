var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var t=Arr.shift()-0;
for(var i=0;i<t;i++){
   var n=Arr.shift()-0;
   var arr=(Arr.shift()).split(" ").map(Number);
   var max=0;
   var min=0;
   var m=arr[0];
   for(var j=1;j<n;j++){
      max=Math.max(arr[j]-m,max);
      min=Math.min(arr[j]-m,min);
      m=arr[j];
   }
   console.log(max+" "+Math.abs(min));
}