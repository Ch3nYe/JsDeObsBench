console.log(function(args){
  const [[Q],...tmp] = args.trim().split('\n').map( r=>r.split(' ').map(v=>v|0) );
  const MAX = 1e5;
  const a = Array(MAX).fill(true);
  const s = Array(MAX+2).fill(0);
  a[0] = false; s[2] = 1;
  for ( let i = 1; i < MAX; i++ ) {
    if ( a[i] ) {
      const n = 2*i+1;
      if ( ~i&1 && a[i/2] ) s[i+1] += 1;
      for ( let j = i+n; j < MAX; j=j+n ) a[j] = false;
    }
    s[i+2] += s[i+1];
  }
  const x = [];
  for ( let i = 0; i < Q; i++ ) {
    const l = ( tmp[i][0] - 1 ) / 2;
    const r = ( tmp[i][1] - 1 ) / 2 + 1;
    x.push( s[r] - s[l] );
  }
  return x.join('\n');
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
