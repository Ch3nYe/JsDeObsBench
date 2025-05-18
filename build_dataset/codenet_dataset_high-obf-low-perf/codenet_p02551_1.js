// inputに入力データ全体が入る
function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split("\n");
  tmp = input[0].split(" ");
  var N = parseInt(tmp[0]);
  var Q = parseInt(tmp[1]);
  var minRows = Array(N-2);
  var minCols = Array(N-2);
  minRows.fill(N-2);
  minCols.fill(N-2);
  var result = BigInt((N-2)*(N-2));
  for(var i=0; i<Q; i++) {
    var query = input[i+1].split(" ");
    var q_1 = parseInt(query[0]);
    var q_2 = parseInt(query[1]);
    var myArray = minRows;
    var myArray2 = minCols;
    
    var index = q_2-2;
    var closest = minCols[index];
    if(q_1 == 1) {
      myArray = minCols;
      myArray2 = minRows;
      closest = minRows[index];
    }
    result -= BigInt(closest);
    for(var j=0; j<closest; j++) {
      if(myArray[j] > index) myArray[j] = index;
    }
    myArray2[index] = 0;
  }
  //出力
  console.log("%d", Number(result));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));