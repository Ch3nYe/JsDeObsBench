"use strict"
function Main(input) {
  input = input.trim().split('\n');
  const N = Number(input[0].trim());
  const A = input[1].trim().split(' ').map(Number);
  
  let ret = 'YES';
  for(let i=0; i<N; i++){
    let tmp = A.slice(i+1);
    let r = tmp.indexOf(A[i]);
    if(r !== -1){
      ret = 'NO';
      break;
    }
  }

  console.log(ret);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));