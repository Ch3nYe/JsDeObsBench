console.log((args=>{
  const [[N],...tmp] = args.trim().split('\n').map(r=>r.split(' ').map(v=>v|0));
  const rp = [], bp = [];
  for ( let i = 0; i < N; i++ ) {
    rp.push(tmp[i]);
    bp.push(tmp[N+i]);
  }
  bp.sort(([a],[b])=>a-b);
  let count = 0;
  const test = [];
  for ( let i = 0; i < N; i++ ) {
    const [bx,by] = bp[i];
    let max = [-1,-1];
    for ( let j = 0; j < rp.length; j++ ) {
      const [rx,ry] = rp[j];
      if ( bx < rx ) continue;
      if ( by > ry && ry > max[1] ) max = [j,ry];
    }
    if ( max[1] >= 0 ) {
      rp.splice( max[0], 1 );
      count++;
    }
  }
  return `${count}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
