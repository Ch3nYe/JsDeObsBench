'use strict';
function Main(inputs) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  const input = inputs.split("\n");
  const a = Number(input[0].split(' ')[0]);
  const b = Number(input[0].split(' ')[1]);
  const k = Number(input[0].split(' ')[2]);

  console.log((a > k ? a - k : 0), (a + b > k ? a + b - k : 0));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
