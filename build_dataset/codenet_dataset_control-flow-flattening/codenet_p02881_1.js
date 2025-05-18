'use strict';
function main(input) {
  const N = parseInt(input);
  let distance = N - 1;
  for (let a = 2; a <= Math.sqrt(N); ++a) {
    let b = N / a;
    if (Number.isInteger(b) && a+b-2 < distance) {
      distance = a+b-2;
    }
  }
  console.log(distance);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
