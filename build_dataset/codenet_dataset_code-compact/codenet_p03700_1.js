console.log((args=>{
  const [[N,A,B],...h] = args.trim().split`\n`.map(r=>r.split` `.map(v=>v|0));
  let ok = Math.ceil(1e9/B), ng = 0;
  bisect: while ( ok > ng+1 ) {
    let m = (ok+ng) >> 1, k = m;
    for ( let i = 0; i < N; i++ ) {
      let r = h[i] - m*B;
      if ( r <= 0 ) continue;
      k -= Math.ceil(r/(A-B));
    }
    if ( k >= 0 ) ok = m;
    else ng = m;
  }
  return `${ok}`;
})(require('fs').readFileSync('/dev/stdin','utf8')));
