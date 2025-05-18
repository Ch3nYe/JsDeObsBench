console.log((args=>{
  const [[H,W],...tmp] = args.trim().split`\n`.map(r=>r.split` `.map(v=>v|0));
  const A = tmp.slice(10);
  const dp = tmp.slice(0,10);
  for ( let k = 0; k < 10; k++ ) {
    for ( let i = 0; i < 10; i++ ) {
      for ( let j = 0; j < 10; j++ ) {
        dp[i][j] = Math.min( dp[i][j], dp[i][k] + dp[k][j] );
      }
    }
  }
  let cost = 0;
  for ( let i = 0; i < H; i++ ) {
    for ( let j = 0; j < W; j++ ) {
      if ( A[i][j] === -1 || A[i][j] === 1 ) continue;
      cost += dp[A[i][j]][1];
    }
  }
  return `${cost}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
