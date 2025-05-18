console.log((args=>{
  const [[N],D,[M],T] = args.trim().split('\n').map(r=>r.split(' ').map(v=>v|0));
  D.sort((a,b)=>a-b);
  T.sort((a,b)=>a-b);
  let j = -1;
  Q: for ( let i = 0; i < M; i++ ) {
    while ( ++j < N ) {
      if ( D[j] > T[i] ) return 'NO';
      if ( D[j] === T[i] ) continue Q;
    }
    return 'NO';
  }
  return 'YES';
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
