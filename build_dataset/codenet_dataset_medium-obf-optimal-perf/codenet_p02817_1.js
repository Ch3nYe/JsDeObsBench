// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
    st = input[0].split(" ");
  

  //  s = st[1].trim();   //Sうけとり
  //  t = st[0].trim();   //Tうけとり
    
  //  var ts='';
   // ts =s+t;    //T+S  連結
    
    console.log(st[1]+st[0]);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
