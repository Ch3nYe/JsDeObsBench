// https://atcoder.jp/contests/abc085/tasks/abc085_a
"use strict"
function Main(input) {
  const date = input.split(`\n`)[0].replace(/^.{4}/, 2018 );
  console.log(date);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));