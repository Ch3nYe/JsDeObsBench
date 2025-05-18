function Main(input) {
  var dataList = input.split("\n");
  var data = dataList[0].split(" ");
  var n = data[0];
  var d = data[1];
  var checkNum = (d * 2) + 1;
  var num = Math.floor(n/checkNum);
  var rest = n % checkNum;
  if (rest > 0) num += 1;
  console.log(num);
  
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));