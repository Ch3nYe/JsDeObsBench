// https://atcoder.jp/contests/agc012/tasks/agc012_a
"use strict";
function Main(input) {
  const params = input.trim().split("\n");
  const N = Number(params[0].trim());
  const sortedA = params[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  let total = 0;
  for (let i = 0; i < N; i++) {
    total += sortedA[i * 2 + 1];
  }

  console.log(total);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
