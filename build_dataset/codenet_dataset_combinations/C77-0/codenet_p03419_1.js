console.log((args=>{
  const [N,M] = args.trim().split(' ').map(v=>v-2);
  return `${Math.abs(N*M)}`
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
