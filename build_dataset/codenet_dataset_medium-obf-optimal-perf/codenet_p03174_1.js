'use strict';
function Main(input){
  input=input.trim().split(/\n/);
  const N=input.shift()-0;
  const M=Math.pow(2,N);
  const K=Math.pow(10,9)+7;
  input=input.map(str=>str.split(/\s+/).map(x=>x-0));
  const Match=input;
  
  const dp=new Array(N).fill(0).map((x,j)=>new Object);
  dp[-1]={0:1,};
  
  const p=new Array(N).fill(0).map((x,i)=>(1<<i));
  
  /*
    男N-1から降順に売れてゆく場合を考える。
    dp[i][j]で男0~iと「女i+1人の組み合わせのうちj番目」が残っているとき、
    残りのマッチングの場合の数。
  */
  
  for(let i=-1;i<N-1;i++){
    Object.keys(dp[i]).forEach(function(J){
      J=J-0;
      dp[i][J]%=K;
      for(let j=0;j<N;j++){
        if((J&p[j])>0)continue;
        if(Match[i+1][j]===0)continue;
        dp[i+1][J+p[j]]=(dp[i+1][J+p[j]]||0)+dp[i][J];
      }
    });
  }
  console.log((dp[N-1][M-1]||0)%K);
}

Main(require('fs').readFileSync('/dev/stdin','utf8'));
