// inputに入力データ全体が入る
function Main(input) {
  var a,b,c;
  a = Number(input.split('\n')[0].split(' ')[0]);
  b = Number(input.split('\n')[0].split(' ')[1]);
  c = Number(input.split('\n')[0].split(' ')[2]);
  console.log(c - (a - b) > 0 ? c - (a - b) : 0);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
