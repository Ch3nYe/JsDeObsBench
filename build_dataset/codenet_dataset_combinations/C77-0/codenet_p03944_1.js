"use strict"
function Main(input) {
  input = input.trim().split('\n');
  let WHN = input[0].split(' ').map(Number);
  let minX = 0;
  let minY = 0;
  let maxX = WHN[0];
  let maxY = WHN[1];
  const N = WHN[2];
 
  for(let i=1; i<=N; i++){
    let tmp = input[i].trim().split(' ').map(Number)
    let A = tmp[2];
    if(A === 1){
      if(tmp[0] > minX){
        minX = tmp[0];
      }
    } else if (A === 2) {
      if(tmp[0] < maxX){
        maxX = tmp[0];
      }
    } else if (A === 3) {
      if(tmp[1] > minY) {
        minY = tmp[1];
      }
    } else if (A === 4) {
      if(tmp[1] < maxY) {
        maxY = tmp[1];
      }
    }
  }
 
  const X = maxX - minX;
  const Y = maxY - minY;
  if(X <= 0 || Y <= 0){
    console.log(0);
  } else {
    console.log(X*Y);
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));