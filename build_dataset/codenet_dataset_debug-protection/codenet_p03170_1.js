'use strict';
(function(input){
  input=input.trim().split(/\s+/).map(x=>x-0);
  const N=input.shift();
  const K=input.shift();
  const A=input;
  const dp=new Array(K+2).fill('tbd');
  
  dp[K+1]=true;
  for(let i=K+1;i>=0;i--){
    if(dp[i])
      if(dp[i-1]===true){
        i--;
        continue;
      }
      for(let j=1;j<=A[0];j++)
        if(i-j>=0)
          if(dp[i-j]==='tbd')
            dp[i-j]=false;
    if(!dp[i])
      for(let a=0;a<N;a++)
        if(i-A[a]>=0)
          dp[i-A[a]]=true;
  }
  
  if(dp[0])console.log('First');
  else console.log('Second');
})(require('fs').readFileSync('/dev/stdin','utf8'));
