"use strict"

const main = arg => {
  arg = arg.trim().split("\n");
  const N = parseInt(arg[0]);
  const A = arg[1].split(" ").map(n=>parseInt(n)).sort((a,b)=>a-b);
  
  let pairNums = [];
  
  for(let i in A) {
      if(A[i] === A[parseInt(i) + 1]) {
        pairNums.push(A[i]);
      }
  }
  
  pairNums.sort((a,b)=>b-a);
  const set = new Set(pairNums);

  console.log(pairNums.length ? [...set][0] * [...set][1] : 0);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
