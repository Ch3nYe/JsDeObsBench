console.log(function(args){
  const tmp = args.trim().split('\n').map( r=>r.split(' ') );
  const N = tmp.shift()[0]|0;
  const p = tmp[0].map(parseFloat);
  const dp = Array(N).fill(0).map(r=>Array(N+1).fill(.0));
  dp[0][0] = 1.0 - p[0];
  dp[0][1] = p[0];
  for ( let i = 0; i < N-1; i++ ) {
    for ( let j = 0; j <= i + 1; j++ ) {
      dp[i+1][j+1] += dp[i][j] * p[i+1];
      dp[i+1][j] += dp[i][j] * (1.0-p[i+1]);
    }
  }
  return dp[N-1].slice((N+1)/2).reduce((a,b)=>a+b).toString();
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
