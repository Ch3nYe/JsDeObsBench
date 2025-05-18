console.log((args=>{
  let [N,M] = args.trim().split` `.map(v=>v|0);
  const MOD = 1e9+7;
  const d = new Map();
  for ( let i = 2; i <= M; i++ ) {
    if ( M % i ) continue;
    let k = 0;
    do {
      k++;
      M /= i;
    } while ( M % i === 0 );
    d.set( i, k );
  }
  const mul = (a,b) => ((a>>16)*b%MOD*65536+(a&65535)*b)%MOD;
  const {fac,finv} = (max=>{
    const fac = [1,1], inv = [0,1], finv = [1,1];
    for (let i = 2; i < max; i++) {
      fac.push( mul( fac[i-1], i) );
      inv.push( MOD - mul(inv[MOD%i], MOD/i|0) );
      finv.push( mul( finv[i-1], inv[i]) );
    }
    return {fac,finv};
  })(N+N);
  const nCr = (n,r) => mul(fac[n],mul(finv[r],finv[n-r]));
  let c = 1;
  for ( const [,i] of d ) c = mul(c,nCr(i+N-1,N-1));
  return `${c}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
