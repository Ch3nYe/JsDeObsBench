var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==0)break;
   var sum=(n!=1)?1:0;
   var sqrt=Math.sqrt(n);
   for(var i=2;i<sqrt;i++){
      if(n%i==0)sum+=i+n/i;
   }
   if(n%sqrt==0 && sqrt!=1)sum+=sqrt;
   var ans;
   if(n==sum)ans="perfect number";
   else if(n>sum)ans="deficient number";
   else if(n<sum)ans="abundant number";
   console.log(ans);
}