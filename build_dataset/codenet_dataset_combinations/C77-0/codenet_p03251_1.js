'use strict';
const main = input => {
  const num = input[0].split(' ').map(val => parseInt(val)), N = num[0], M = num[1], X = num[2], Y = num[3], x = input[1].split(' ').map(val => parseInt(val)), y = input[2].split(' ').map(val => parseInt(val));
  // console.log(N, M, X, Y, x, y);
  const xMax = Math.max(...x), yMin = Math.min(...y);
  // console.log(xMax, yMin);
  let ans = 0;
  for(let z=X+1; z<=Y; z++) {
    if (xMax < z && yMin >= z) {
      ans = 1;
      break;
    }
  }
  console.log(ans==1?'No War':'War');
  
}
main(require("fs").readFileSync("/dev/stdin", "utf8").split('\n'));