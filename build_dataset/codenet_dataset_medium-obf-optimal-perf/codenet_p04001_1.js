console.log((args=>{
  const S = args.trim();
  const L = S.length;
  let total = 0;
  for ( let bit = 0; bit < 1<<(L-1); bit++ ) {
    let st = S[0]|0, t = 0;
    for ( let i = 0; i < L-1; i++ ) {
      if ( (1<<i) & bit ) {
        t += st; st = (S[i+1]|0);
      } else {
        st = st * 10 + (S[i+1]|0);
      }
    }
    total += t + st;
  }
  return total.toString();
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
