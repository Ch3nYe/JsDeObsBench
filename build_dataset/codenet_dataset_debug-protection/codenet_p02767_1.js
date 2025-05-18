// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  // 1行目がinput[0], 2行目がinput[1], …に入る
  var inputs = input[1].split(" ");

  // argsは配列
  function avg(args) {
    var num = 0;
    for(var n of args) {
      num += Number(n);
    }
    return num / args.length;
  }
  var average = Math.round(avg(inputs));
  // console.log(average);

  var useStamina = 0;
  for(var point of inputs) {
    useStamina += Math.pow(average - point, 2);
  }
  console.log(useStamina);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main('2\n1 4');
// Main('7\n14 14 2 13 56 2 37');
