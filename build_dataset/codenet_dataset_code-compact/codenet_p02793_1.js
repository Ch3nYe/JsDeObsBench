console.log((args=>{
  const [[N],A] = args.trim().split`\n`.map(r=>r.split` `.map(v=>0|v));
  const MOD = 1e9+7, MAX = Math.max(...A);
  const mul = (a,b) => ((a>>16)*b%MOD*65536+(a&65535)*b)%MOD;
  const isP = Array(1e6+1).fill(true);
  const px = new Map();
  for ( let p = 2; p <= MAX; p++ ) {
    if ( !isP[p] ) continue;
    for ( let i = p+p; i <= MAX; i=i+p ) isP[i] = false;
    px.set(p,0);
  }
  const ap = [];
  for ( let i = 0; i < N; i++ ) {
    let a = A[i];
    ap.push(new Map());
    for ( const [p,x] of px ) {
      if ( a === 1 )break;
      let s = 0;
      while ( a % p === 0 ) {
        a/=p;
        s++;
      }
      if ( s ) ap[i].set(p,s);
      if ( s > x ) px.set(p,s);
    }
  }
  let sum = 0;
  for ( let i = 0; i < N; i++ ) {
    let B = 1;
    for ( const [p,q] of px ) {
      if ( !q ) continue;
      B = mul( B, p ** (q-(ap[i].get(p)|0)) );
    }
    sum = ( sum + B ) % MOD;
  }
  return sum;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
