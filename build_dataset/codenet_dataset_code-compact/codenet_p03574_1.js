'use strict'
function Main(input){
  input = input.trim().split('\n');
  const hw = input.shift().split(' ').map((str)=> Number(str));
  const H  = hw[0], W = hw[1];  
  const data = input.map(ls => ls.split(''));
  
  const hy = [-1, -1, -1, 0, 0, 1, 1, 1];
  const wx = [-1, 0, 1, -1, 1, -1, 0, 1];
  
  for(let i = 0; i < H; i++){
    for(let j = 0; j < W; j++){
      
      if(data[i][j] === '#') continue;
      
      let count = 0;
      for(let k = 0; k < 8; k++){
        const y = i + hy[k] , x = j + wx[k]; 
        if(y < 0 || H <= y) continue;
        if(x < 0 || W <= x) continue;
        
        if(data[y][x] === '#') {
          count += 1;
        }
      }
      data[i][j] = count;
    }
  }
  const result = data.map(ls => ls.join('')).join('\n');
  console.log(result);
}

//固定
Main(require("fs").readFileSync("/dev/stdin", "utf8"));