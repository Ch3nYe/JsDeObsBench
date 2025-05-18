console.log((args=>{
  const [[N],A] = args.trim().split('\n').map( r=>r.split(' ').map(v=>v|0));
  const a = [1-A[0]];
  for ( let i = 1; i < N; i++ ) a.push(a[i-1] * 2 - A[i]);
  a.push(0);
  let n = BigInt(A[N]);
  for ( let i = N-1; i >= 0; i-- ) {
    const c = a[i+1] + A[i+1];
    if ( a[i] > c ) a[i] = c;
    else if ( a[i] * 2 < c ) return '-1';
    n += BigInt(a[i] + A[i]);
  }
  return `${n}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
