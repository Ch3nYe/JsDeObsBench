function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split("\n");
  
  //入力データ取得
  var tmp0 = input[0].split(" ");
  var N = tmp0[0] - 0;
  var K = tmp0[1] - 0;
  var tmp1 = input[1].split(" ");
  
  var point = {r:tmp1[2]-0,s:tmp1[0]-0,p:tmp1[1]-0};
  var str = input[2];
  var sum = 0;
  
  for(var i=0; i<N; i++){
    var char = str[i];
    var charBK = "";
    if(i-K >= 0){
      charBK = str[i-K];
    }
    if(char == charBK){
      str = str.slice(0,i) + 'B' + str.slice(i+1);
      continue;
    }
    sum += point[char];
  }
  //出力
  console.log(sum);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));