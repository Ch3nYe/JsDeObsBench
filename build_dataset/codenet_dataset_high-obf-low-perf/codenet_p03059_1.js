function Main(input) {
  input = input.split(" ");
  var a = parseInt(input[0], 10);
  var b = parseInt(input[1], 10);
  var t = parseInt(input[2], 10);
  console.log('%d',Math.floor((t + 0.5) / a) * b);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));