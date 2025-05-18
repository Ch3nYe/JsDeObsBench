(args => {
  const [[N,M],...path] = args.trim().split('\n').map(a=>a.split(' ').map(a=>a|0));
  const dist = [], sign = [0], branch = [];
  for ( let i = 1; i <= N; i++ ) {
    dist[i] = Infinity; sign[i] = Infinity; branch[i] = [];
  }
  for ( let i = 0; i < M; i++ ) {
    const [A,B] = path[i];
    branch[A].push(B);
    branch[B].push(A);
  }
  let stack = [];
  function mark( step, i ) {
    for ( let next of branch[i] ) {
      if ( dist[next] > step ) {
        dist[next] = step;
        sign[next] = i;
        stack.push(()=>mark(step+1,next));
      }
    }
  }
  mark(0,1);
  while( stack.length ) {
    let s;
    while ( s = stack.pop() ) s();
  }
  if ( sign.slice(2).some(v=>v>N) ) return console.log('No');
  console.log('Yes\n'+sign.slice(2).join('\n'));
})(require('fs').readFileSync('/dev/stdin', 'utf8'))
