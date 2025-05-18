console.log((args=>{
  const [[N],D] = args.trim().split('\n').map( r=>r.split(' ').map(v=>v|0));
  if ( N === 1 ) return `${D[0]}`;
  const q = Array(13).fill(0);
  let _s = 12, s = 1;
  for ( let i = 0; i < N; i++ ) {
    if ( ++q[D[i]] > 2 ) return '0';
    if ( D[i] < _s ) _s = D[i];
    if ( q[D[i]] === 2 ) _s = Math.min(_s,24-2*D[i]);
  }
  if ( q[12] > 1 || q[0] > 0 ) return '0';
  const mask = q.reduce((a,b,i)=>a|(b===1?0:1<<i),1);
  for ( let m = 0; m < 1<<13; m = m+1|mask ) {
    let min = _s;
    for ( let a = 1; a <= 12; a++ ) {
      if ( !q[a] ) continue;
      for ( let b = a+1; b <= 12; b++ ) {
        if ( !q[b] ) continue;
        let t = b - a;
        if ( q[a]===1 && q[b] === 1 ) t = (m>>a&1^m>>b&1)?24-a-b:t;
        min = Math.min( min, t );
      }
    }
    if ( s < min ) s = min;
  }
  return `${s}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
