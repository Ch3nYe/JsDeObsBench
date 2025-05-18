var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var arr=(Arr.shift()).split(" ").map(Number);
   if(arr[0]==0)break;
   var sum=0;
   arr=arr.filter(function(v){
      if(v>10)v=10;
      sum+=v;
      return v==1;
   });
   var i=arr.length;
   while(i!=0){
      if(sum+10<=21)sum+=10;
      i--;
   }
   console.log((sum>21)?0:sum);
}