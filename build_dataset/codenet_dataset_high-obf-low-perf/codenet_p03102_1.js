// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split("\n")
  tmp0 = input[0].split(" ")
  N = Number(tmp0[0])
  M = Number(tmp0[1])
  C = Number(tmp0[2])
  B = input[1].split(" ")

  var ans = 0;
  for(var i = 0; i < N; i++)
  {
    A = input[2 + i].split(" ")
    var tmpSum = 0
    for(var j = 0; j < M; j++)
    {
      tmpSum += Number(A[j]) * Number(B[j])
    }
    if( (tmpSum+ C) > 0){
      ans++;
    }

  }
  console.log(ans)
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main("3 2\n2 1\n")