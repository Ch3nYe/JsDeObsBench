'use strict'

function main(s) {

  s = s.split('\n');
  const K = Number(s[0].split(' ')[1]);
  const balls = s[1].split(' ').map(el => Number(el));
  const countBucket = [...Array(200001)].fill(0);

  for (const num of balls) {
    countBucket[num] += 1;
  }

  countBucket.sort((a, b) => b - a);

  const answer = countBucket.slice(K).reduce((a, b) => a + b);
  console.log(answer);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
