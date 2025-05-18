'use strict'

function main(s) {
  s = s.split('\n')[0].split(' ').map(n => Number(n));

  const A = s[0];
  const B = s[1];
  const C = s[2];
  const X = s[3];
  const Y = s[4];
  const min = Math.min(X, Y);

  // AとBをそれぞれ買う
  const case1 = A * X + B * Y

  // ABセットで可能な限り組み替えて、残りをそれぞれ買う
  const case2 = (2 * C * min) + ((X - min) * A) + ((Y - min) * B)

  // 全てABセットで組み替える
  const case3 = 2 * C * Math.max(X, Y);

  const answer = Math.min(...[case1, case2, case3]);
  console.log(answer);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
