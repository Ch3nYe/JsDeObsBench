console.log(function(args){
  const tmp = args.trim().split('\n').map( r=>r.split(' ').map(v=>v|0) );
  const N = tmp[0][0], Q = tmp[N+1][0];
  const V = [0], W = [0], v = [], L = [];
  for ( let i = 1; i <= N; i++ ) {
    V.push( tmp[i][0] );
    W.push( tmp[i][1] );
  }
  let Lmax = 0;
  for ( let i = 1; i <= Q; i++ ) {
    v.push( tmp[N+1+i][0] );
    L.push( tmp[N+1+i][1] );
    if ( L[i-1] > Lmax ) Lmax = L[i-1];
  }
  const dp = [Array(Lmax+1).fill(0)];
  for ( let i = 1; i <= N; i++ ) {
    dp[i] = [];
    for ( let w = 0; w <= Lmax; w++ ) {
      if ( w >= W[i] ) dp[i][w] = Math.max( dp[i>>1][w-W[i]] + V[i], dp[i>>1][w] );
      else dp[i][w] = dp[i>>1][w];
    }
  }
  const max = [];
  for ( let i = 0; i < Q; i++ ) {
    max.push( dp[v[i]][L[i]] );
  }
  return max.join('\n');
}(require('fs').readFileSync('/dev/stdin', 'utf8')));