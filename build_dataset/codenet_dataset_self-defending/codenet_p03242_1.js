'use strict';
const main = input => {
  let n = input[0].split('');
  console.log(n.map(val => val=='9'?1+'':9+'').reduce((acc, cur) => acc+cur));
  
}
main(require("fs").readFileSync("/dev/stdin", "utf8").split('\n'));