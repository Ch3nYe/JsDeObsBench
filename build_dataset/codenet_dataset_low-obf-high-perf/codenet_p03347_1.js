console.log((args=>{
  const [N,...A] = args.trim().split('\n').map(v=>v|0);
  if ( A[0] > 0 ) return '-1';
  let m = 0;
  for ( let i = 1; i < N; i++ ) {
    if ( A[i] > i || A[i] > A[i-1]+1) return '-1'
    if ( A[i] === A[i-1]+1 ) m++;
    else if ( A[i] <= A[i-1] ) m += A[i];
  }
  return `${m}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
