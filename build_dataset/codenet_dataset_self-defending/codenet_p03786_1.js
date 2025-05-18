console.log((args=>{
  const [[N],A] = args.trim().split('\n').map( r=>r.split(' ').map(v=>v|0) );
  A.sort((a,b)=>a-b);
  let sum = A[0], n = 0;
  for ( let i = 1; i < N; i++ ) {
    if ( sum * 2 >= A[i] ) n++;
    else n = 0;
    if ( sum + A[i] >= 1e9 ) return `${n+N-i}`;
    sum = sum + A[i];
  }
  return `${n+1}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
