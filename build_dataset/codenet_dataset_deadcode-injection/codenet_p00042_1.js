var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var cnt=1;
while(true){
   var W=Arr.shift()-0;
   if(W==0)break;
   var N=Arr.shift()-0;
   var dp=[];
   for(var y=0;y<N+1;y++){
      dp[y]=[];
      for(var x=0;x<=W;x++){
         dp[y][x]=0;
      }
   }
   var v=[];
   var w=[];
   for(var i=0;i<N;i++){
      var arr=(Arr.shift()).split(",").map(Number);
      v.push(arr[0]);
      w.push(arr[1]);
   }
   for(var y=0;y<N;y++){
      for(var x=0;x<=W;x++){
         if(x-w[y]>=0)dp[y+1][x]=Math.max(dp[y][x],dp[y][x-w[y]]+v[y]);
         else dp[y+1][x]=dp[y][x];
      }
   }
   console.log("Case "+cnt+":");
   cnt++;
   console.log(dp[N][W]);
   var maxValue=dp[N][W];
   while(maxValue==dp[N][W-1])W--;
   console.log(W);
}