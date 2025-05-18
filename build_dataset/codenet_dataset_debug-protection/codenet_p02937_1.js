console.log((args=>{
  const [s,t] = args.trim().split`\n`;
  const sl = s.length, tl = t.length;
  let i = -1, cyc = 0;
  T: for ( let j = 0; j < tl; j++ ) {
    for ( let k = i+1; k < sl; k++ ) {
      if ( s[k] === t[j] ) {
        i = k;
        continue T;
      }
    }
    if ( i === -1 ) return '-1';
    cyc++;
    i = -1;
    j--;
  }
  return `${cyc*sl+i+1}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
