console.log((args=>{
  const [[N,T],t] = args.trim().split`\n`.map(r=>r.split` `.map(v=>v|0));
  t.sort((a,b)=>a-b);
  let s = T;
  for ( let i = 1; i < N; i++ ) {
    if ( t[i-1] + T > t[i] ) s += t[i] - t[i-1];
    else s += T;
  }
  return `${s}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
