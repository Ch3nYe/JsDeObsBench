function bomb(start,sum){
   dp[start][sum]++;
   if(start==card.length)return;
   var v=card[start][0];
   var k=card[start][1];
   for(var i=0;i<=k;i++){
      bomb(start+1,sum+v*i);
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var m=arr.shift()-0;
   if(m==0)break;
   var card=[];
   while(m--)card.push(arr.shift().split(" ").map(Number));
   var g=arr.shift()-0;
   var dp=[];
   for(var i=0;i<=card.length;i++){
      dp[i]=[];
      for(var j=0;j<=1000;j++){
         dp[i][j]=0;
      }
   }
   bomb(0,0);
   while(g--)console.log(dp[card.length][arr.shift()-0]);
}