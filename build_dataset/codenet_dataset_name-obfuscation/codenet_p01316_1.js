var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var nm=arr.shift().split(" ");
   if(nm.join(" ")=="0 0")break;
   var n=nm[0];
   var m=nm[1];
   var M=[];
   for(var i=0;i<m;i++)M.push(arr.shift()-0);
   var N=[];
   for(var i=0;i<n;i++)N.push(arr.shift()-0);
   var dp=[];
   for(var i=0;i<=n;i++){
      dp[i]=[];
      for(var j=0;j<=255;j++){
         dp[i][j]=Infinity;
      }
   }
   dp[0][128]=0;
   for(var i=1;i<=n;i++){
      for(var j=0;j<=255;j++){
         if(dp[i-1][j]!=Infinity){
            for(var k=0;k<m;k++){
               var jm=j+M[k];
               if(jm<0)jm=0;
               if(jm>255)jm=255;
               dp[i][jm]=Math.min(dp[i][jm],dp[i-1][j]+Math.pow(N[i-1]-jm,2));
            }
         }
      }
   }
   var min=Infinity;
   dp[n].forEach(function(v){
      min=Math.min(min,v);
   });
   console.log(min);
}