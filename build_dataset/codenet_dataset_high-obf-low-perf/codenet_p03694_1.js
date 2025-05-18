'use strict'

function main(s) {

  const houses = s.split('\n')[1].split(' ').map(n => Number(n));
  const min = Math.min(...houses);
  const max = Math.max(...houses);

  const answer = max - min;
  console.log(answer);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
