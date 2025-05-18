"use strict";

const main = arg => {
  arg = arg.trim().split("\n");
  const N = parseInt(arg[0]);
  const A = arg[1].split(" ").map(n=>parseInt(n));

  const totalSum = A.reduce((m,n)=>m+n);
  
  let left  = A[0];
  let right = totalSum - A[0];
  
  let answer = Infinity;
  
  for(let i=0; i<N - 1; i++) {
    let diff = Math.abs(right - left);
    answer = Math.min(answer, diff);
    
    right -= A[parseInt(i) + 1];
    left  += A[parseInt(i) + 1];
  }
  
  console.log(answer);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
