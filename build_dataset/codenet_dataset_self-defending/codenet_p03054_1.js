'use strict'
function Main(input){
  input=input.split(/\s+/);
  var H=input.shift()-0;
  var W=input.shift()-0;
  var N=input.shift()-0;
  var sr=input.shift()-0;
  var sc=input.shift()-0;
  var S=input.shift();
  var T=input.shift();
  var dp=[[sc,sc,sr,sr]];
  for(let i=0;i<N;i++){
    dp[i+1]=[];
    dp[i+1][0]=dp[i][0]-(S[i]==='L'?1:0);
    dp[i+1][1]=dp[i][1]+(S[i]==='R'?1:0);
    dp[i+1][2]=dp[i][2]-(S[i]==='U'?1:0);
    dp[i+1][3]=dp[i][3]+(S[i]==='D'?1:0);
    if(dp[i+1][0]===0||dp[i+1][1]===W+1||dp[i+1][2]===0||dp[i+1][3]===H+1){
      console.log('NO');
      return;
    }
    dp[i+1][0]=Math.min(dp[i+1][0]+(T[i]==='R'?1:0), W)
    dp[i+1][1]=Math.max(dp[i+1][1]-(T[i]==='L'?1:0), 1)
    dp[i+1][2]=Math.min(dp[i+1][2]+(T[i]==='D'?1:0), H)
    dp[i+1][3]=Math.max(dp[i+1][3]-(T[i]==='U'?1:0), 1)
  }
  console.log('YES');
}

Main(require('fs').readFileSync('/dev/stdin','utf8'));
