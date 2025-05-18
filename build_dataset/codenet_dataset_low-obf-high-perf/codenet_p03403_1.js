console.log((args=>{
  const [[N],A] = args.trim().split('\n').map( r=>r.split(' ').map(v=>v|0) );
  let C = Math.abs(A[0]) + Math.abs(A[N-1]);
  for ( let i = 1; i < N; i++ ) {
    C += Math.abs( A[i] - A[i-1] );
  }
  const c = [C - Math.abs(A[0]) - Math.abs(A[1]-A[0]) + Math.abs(A[1])];
  for ( let i = 1; i < N-1; i++ ) {
    c.push( C - Math.abs(A[i+1]-A[i]) - Math.abs(A[i]-A[i-1]) + Math.abs(A[i+1]-A[i-1]) );
  }
  c.push( C - Math.abs(A[N-1]) - Math.abs(A[N-2]-A[N-1]) + Math.abs(A[N-2]));
  return c.join`\n`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
