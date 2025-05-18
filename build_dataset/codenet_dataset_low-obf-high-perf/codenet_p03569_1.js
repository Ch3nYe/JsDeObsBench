console.log((args=>{
  const s = args.trim();
  const N = s.length-1;
  let x = 0;
  for ( let i = 0, j = N; i < j; i++, j-- ) {
    while ( s[i] !== s[j] ) {
      if ( s[i] === 'x' ) x++,i++;
      else if ( s[j] === 'x' ) x++,j--;
      else return '-1';
    }
  }
  return `${x}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
