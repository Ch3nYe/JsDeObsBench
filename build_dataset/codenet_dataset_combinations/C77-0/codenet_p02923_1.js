"use strict"
 
function Main(input) {
  input = input.trim().split('\n');
  const N = Number(input[0]);
  const H = input[1].trim().split(' ').map(Number);

  let ret = 0;
  let move = 0;
  
  for(let i=0; i<N; i++){
    if (H[i] >= H[i+1]) {
      move += 1;
    } else {
      ret = Math.max(ret, move);
      move = 0;
    }
  }

  console.log(ret);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));