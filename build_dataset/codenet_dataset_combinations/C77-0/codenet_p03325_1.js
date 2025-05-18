'use strict'

function main(s) {

  const a = s.split('\n')[1].split(' ').map(n => Number(n));

  let ans = 0;

  for (let n of a) {
    while (n % 2 === 0) {
      n = n / 2;
      ans += 1;
    }
  }

  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));