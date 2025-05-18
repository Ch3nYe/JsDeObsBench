'use strict'

function main(s) {

  s = s.split('\n');
  const r = Number(s[0]);
  const g = Number(s[1]);
  let ans = g + (g - r);

  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
