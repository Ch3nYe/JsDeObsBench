console.log((args=>{
  const [N,...P] = args.trim().split('\n').map(v=>v|0);
  const dp = Array(N).fill(0);
  for ( let i = 0; i < N; i++ ) dp[P[i]+1] = dp[P[i]] + 1;
  return `${N-dp.reduce((a,b)=>(a>b)?a:b,0)}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
