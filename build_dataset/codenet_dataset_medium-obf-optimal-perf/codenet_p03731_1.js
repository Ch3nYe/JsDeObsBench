"use strict";

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  var input0 = input[0].split(" ");
  var N = parseInt(input0[0]);
  var T = parseInt(input0[1]);
  var t = input[1].split(" ");
  for (var i=0; i<N; i++) {
    t[i] = parseInt(t[i]);
  }
  
  var count = 0;
  var t_i;
  for (var i=1; i<N; i++) {
    t_i = t[i]-t[i-1];
    if (t_i<T) {
      count += t_i;
    } else {
      count += T;
    }
  }
  
  console.log (count+T);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));