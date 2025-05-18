console.log((args=>{
  const s = args.trim();
  const L = s.length;
  const p = Array(L).fill(0);
  for ( let i = L; --i;) p[i-1] = p[i] + (s[i]==='p');
  let g = 0, w = 0;
  for ( let i = 0; i < L; i++ ) {
    if ( s[i] === 'g' ) {
      if ( g > p[i] ) {
        g--; w++;
      } else g++;
    } else g--;
  }
  return `${w}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
