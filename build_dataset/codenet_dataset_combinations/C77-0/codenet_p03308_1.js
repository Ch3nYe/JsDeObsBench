// https://atcoder.jp/contests/abc102/tasks/abc102_b
"use strict"
function Main(input) {
  const params = input.split('\n')
  const n = Number(params[0]);
  let max = 0;
  let min = Math.pow(10, 10);
  params[1].split(' ').forEach(val => {
    max = Math.max(max, Number(val));
    min = Math.min(min, Number(val));
  });
  console.log(max -　min);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));