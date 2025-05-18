process.stdin.resume();
process.stdin.setEncoding('utf8');
 
// inputに入力データ全体が入る
function Main(input) {
  // 1行目がline1, 2行目がline2, …に入る
  var tmp = input.split("\n");
  var line0 = tmp[0].split(" ");
  var line1 = tmp[1].split(" ");
  //var line2 = tmp[2].split(" ");
  //var line3 = tmp[3].split(" ");

  var n = Number(line0[0]);
  var k = Number(line1[0]);
//  var b = Number(line0[2]);

  var ans = 1;

  //console.log( n+" "+ k +" "+ " hoge ")
  
  for(var i=1; i <=n; i++){
    if(ans < k) ans *= 2;
    else ans += k;
  }

  console.log(ans);
  
  


}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
