'use strict'

function main(s) {

  const x = Number(s);
  const nums = [...Array(31)].map((x, i) => i + 1);
  nums.shift();
  const max_ary = [1];

  for (let i = 0; i < nums.length; i++) {
    let j = 2;
    let n = nums[i];
    let max = Math.pow(n, j);
    if (max > x) continue;
    while (max <= x) {
      j += 1;
      max = Math.pow(n, j);
    }
    max = Math.pow(n, j - 1);
    max_ary.push(max);
  }

  const ans = Math.max(...max_ary);
  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
