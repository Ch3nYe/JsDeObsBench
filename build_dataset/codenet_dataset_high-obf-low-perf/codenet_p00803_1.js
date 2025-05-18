var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n").map(Number);
while(true){
   var n=arr.shift();
   if(n==0)break;
   var max=0;
   for(var i=0;i<=54;i++){
      for(var j=0;j<=96;j++){
         var sum=i*i*i+(j*(j+1)*(j+2))/6;
         if(n>=sum)max=Math.max(max,sum);
      }
   }
   console.log(max);
}