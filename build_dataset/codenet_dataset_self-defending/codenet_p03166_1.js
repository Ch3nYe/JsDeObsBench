'use strict';
console.log(function(args){
  const tmp = args.trim().split('\n').map( r=>r.split(' ').map(v=>v|0) );
  const N = tmp[0][0], M = tmp[0][1];
  const x = [], y = [];
  for ( let i = 0; i < M; i++ ) {
    x.push( tmp[1+i][0] );
    y.push( tmp[1+i][1] );
  }
  const dp = Array(M+1).fill(0).map(_=>Array(N+1).fill(0));
  for ( let i = 1; i <= M; i++ ) {
    for ( let j = 0; j < M; j++ ) {
      dp[i][y[j]] = Math.max( dp[i][y[j]], dp[i-1][x[j]] + 1 );
    }
  }
  return Math.max(...dp[M]).toString();
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
