'use strict';
console.log(function(args){
  const tmp = args.trim().split('\n');
  const HW = tmp[0].split(' ').map(v=>v|0);
  const H = HW[0], W = HW[1];
  const map = [Array(W+2).fill(Infinity)]
  let s = 0;
  for ( let y = 1; y <= H; y++ ) {
    map.push([Infinity]);
    for ( let x = 0; x < W; x++ ) {
      if ( tmp[y][x] === '.' ) {
        s++; map[y].push( 0 );
      } else map[y].push( Infinity );
    }
    map[y].push(Infinity);
  }
  map.push(Array(W+2).fill(Infinity));
  const dir = [[-1,0],[0,-1],[1,0],[0,1]];
  const queue = [[1,1,2]];
  do {
    const q = queue.shift();
    for ( const d of dir ) {
      const x = q[0] + d[0], y = q[1] + d[1];
      if ( x === W && y === H ) return s - q[2];
      if ( map[y][x] === 0 ) {
        map[y][x] = q[2]+1;
        queue.push([x,y,q[2]+1]);
      }
    }
  } while ( queue[0] );
}(require('fs').readFileSync('/dev/stdin', 'utf8')));