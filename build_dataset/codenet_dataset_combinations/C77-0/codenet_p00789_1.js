var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n").map(Number);
while(true){
   var n=arr.shift();
   if(n==0)break;
   var coin=[""];
   for(var i=1;i<=17;i++)coin.push(i*i);
   var dp=[];
   for(var i=0;i<=17;i++){
      dp[i]=[];
      for(var j=0;j<=n;j++){
         dp[i][j]=0;
      }
   }
   dp[0][0]=1;
   for(var i=1;i<=17;i++){
      for(var j=0;j<=n;j++){
        var k=0;
         while(coin[i]*k+j<=n){
            dp[i][coin[i]*k+j]+=dp[i-1][j];
            k++;
         }
      }
   }
   console.log(dp[17][n]);
}