var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var arr=(Arr.shift()).split(" ").map(Number);
   var sum=0;
   var flag=false;
   arr.forEach(function(v){
      if(v!=0)sum+=1;
      if(v>=2)flag=true;
   });
   console.log(flag?sum+1:"NA");
}