console.log((args=>{
  const [HW,...S] = args.trim().split('\n');
  const [H,W] = HW.split(' ').map(v=>parseInt(v));
  const trail = Array.from({length:H},_=>Array(W).fill(false));
  const dir = [[-1,0],[0,-1],[1,0],[0,1]];
  let p = 0;
  for ( let i = 0; i < H; i++ ) {
    for ( let j = 0; j < W; j++ ) {
      if ( trail[i][j] ) continue;
      const stack = [[i,j]];
      trail[i][j] = true;
      let w = S[i][j]==='.'|0, b = w^1;
      while ( stack.length ) {
        const [x,y] = stack.pop();
        for ( const [dx,dy] of dir ) {
          const nx = x+dx, ny = y+dy;
          if ( nx < 0 || H <= nx || ny < 0 || W <= ny
            || trail[nx][ny] || S[x][y] === S[nx][ny] ) continue;
          trail[nx][ny] = true;
          if ( S[nx][ny] === '#' ) b++; else w++;
          stack.push([nx,ny]);
        }
      }
      p += w * b;
    }
  }
  return `${p}`;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
