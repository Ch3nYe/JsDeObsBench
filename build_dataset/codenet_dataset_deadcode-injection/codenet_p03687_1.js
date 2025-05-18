console.log((args=>{
  const S = args.trim().split``.map(c=>c.charCodeAt()-97);
  const N = S.length;
  const a = Array(26).fill(-1);
  for ( let i = 0; i < 26; i++ ) {
    let d = 0;
    for ( let j = 0; j < N; j++ ) {
      d = S[j] === i ? 0 : d + 1;
      if ( a[i] < d ) a[i] = d;
    }
  }
  return Math.min(...a.filter(v=>v>=0));
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
