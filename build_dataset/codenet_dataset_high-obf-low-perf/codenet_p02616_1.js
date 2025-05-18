console.log((args=>{
  const [[N,K],A] = args.trim().split('\n').map( r=>r.split(' ').map(v=>v|0) );
  let Am = [], Ap = [];
  for ( let i = 0; i < N; i++ ) {
    if ( A[i] > 0 ) Ap.push(A[i]);
    if ( A[i] < 0 ) Am.push(A[i]);
  }
  const MOD = BigInt(1e9+7), mul = (a,b) => (BigInt(a)*BigInt(b)%MOD+MOD)%MOD;
  Am.sort((a,b)=>a-b);
  Ap.sort((a,b)=>b-a);
  if ( Ap.length === 0 && K&1 ) return `${ Am.slice(-K).reduce(mul,1) }`;
  let om = 0, op = 0, ap = [], am = [];
  for ( let i = 0; i < K; i++ ) {
    if ( (Ap[op]|0) > -(Am[om]|0) ) {
      ap.push(Ap[op]); op++;
    } else {
      am.push(Am[om]); om++;
    }
  }
  if ( am.length&1 ) {
    if ( (Ap[op]|0) > -(Am[om]|0) ) {
      ap.push(Ap[op]); am.pop();
    } else {
      am.push(Am[om]); ap.pop();
    }
  }
  return `${mul(ap.reduce(mul,1),am.reduce(mul,1))}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
