console.log((args=>{
  const [[N],X] = args.trim().split('\n').map(r=>r.split(' ').map(v=>v|0));
  const _X = [].concat(X).sort((a,b)=>a-b);
  const M1 = _X[N/2-1], M2 = _X[N/2];
  const m = [];
  for ( let i = 0; i < N; i++ ) {
    if ( X[i] <= M1 ) m.push(M2); else m.push(M1);
  }
  return m.join`\n`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
