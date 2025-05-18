'use strict';

function main(stdin) {
  const input = stdin.split(' ').map(v => parseInt(v, 10));
  const N = input[0];
  const L = input[1];

  let sum = 0;
  let min = Infinity;

  for (let i = L; i < L + N; ++i) {
    sum += i;
    if (Math.abs(i) < Math.abs(min)) min = i;
  }
  
  console.log(sum - min);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));