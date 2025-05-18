'use strict'

function main(s) {

  const nums = s.split('\n')[0].split(' ').map(n => Number(n));
  const ans = Math.max(...nums) - Math.min(...nums);

  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
