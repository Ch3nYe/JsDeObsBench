function bomb(a,b,i){
   if(i==n){
      min=Math.min(min,Math.abs(a-b));
      return;
   }
   bomb(a+arr[i],b,i+1);
   bomb(a,b+arr[i],i+1);
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var arr=Arr.shift().split(" ").map(Number);
   var min=Infinity;
   bomb(0,0,0);
   console.log(min);
}