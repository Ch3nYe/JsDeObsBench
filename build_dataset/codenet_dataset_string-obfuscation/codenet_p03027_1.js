// inputに入力データ全体が入る
function Main(input) {
	input = input.split("\n");
  	var Q = parseInt(input[0]);
      var Qs = input.slice(1, Q+1).map(x => x.split(" ").map(y => parseInt(y)));
 	var ans = new Array(Q);
    ans.fill(0);
  	for(var i=0; i < Qs.length; i++){
       for(var j=0; j < Qs[i][2]; j++){
         if(j == 0){
           ans[i] = Qs[i][0] % 1000003;
         }else{
           ans[i] = ans[i]*(Qs[i][0] + j*Qs[i][1]) % 1000003;
         }
       }
      console.log(ans[i]);
    }
 }
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));