process.stdin.resume();
process.stdin.setEncoding('utf8');
 
// inputに入力データ全体が入る
function Main(input) {
  // 1行目がline1, 2行目がline2, …に入る
  var tmp = input.split("\n");
  //var line0 = tmp[0].split(" ");
  //var line1 = tmp[1].split(" ");
  //var line2 = tmp[2].split(" ");
  //var line3 = tmp[3].split(" ");

  var N = Number(tmp[0]);
  //var A = Number(line0[1]);
  //var B = Number(line0[2]);
  
  var pow = 1;
  for(var i=1; i<=N; i++){
    pow *= i;
    pow %= 1000000007;
  }
  
  console.log(pow);

  
  //入出力確認コード
  // A.forEach( function(value) console.log(value); );


}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
