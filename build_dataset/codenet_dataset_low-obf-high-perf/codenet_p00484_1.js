var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var nk=arr.shift().split(" ").map(Number);
var n=nk[0];
var k=nk[1];
var N=[];
for(var i=0;i<n;i++)N.push(arr.shift().split(" ").map(Number));

var dp=[];
for(var i=0;i<=10;i++)dp[i]=[];
var DP=[];
for(var i=0;i<=10;i++)DP[i]=[];

N.forEach(function(v){
   var c=v[0];
   var g=v[1];
   dp[g].push(c);
});

dp.forEach(function(v,i){
   v.sort(function(a,b){return b-a;});
   v.forEach(function(value,j){
      if(j==0)DP[i][j]=dp[i][j];
      if(j>0){
         dp[i][j]+=dp[i][j-1];
         DP[i][j]=dp[i][j]+(j+1)*j;
      }
   });
});


var dp=[];
for(var i=0;i<=n;i++)dp[i]=0;

var bomb=function(cnt,start,sum){
   dp[cnt]=Math.max(dp[cnt],sum);
   if(sum==k)return;
   for(var i=start;i<DP.length;i++){
      DP[i].forEach(function(v,index){
         bomb(cnt+(index+1),i+1,sum+v);
      });
   }
};

bomb(0,0,0);

console.log(dp[k]);