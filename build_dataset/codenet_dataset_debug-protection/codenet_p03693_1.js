// https://atcoder.jp/contests/abc064/tasks/abc064_a
"use strict"
function Main(input) {
  const param = Number(input.split(' ').join(''));
  if(param % 4 === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));