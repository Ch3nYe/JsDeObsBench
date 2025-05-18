var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var dp=[1,2,4];
for(var i=3;i<=31;i++){
   dp[i]=dp[i-1]+dp[i-2]+dp[i-3];
}
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   console.log(Math.ceil(dp[n-1]/3650));
}