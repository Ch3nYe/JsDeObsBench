// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	input = input[0];

	var ans = "";
	for(var i = 1; i <= input.length; i = i + 2){
		ans += input[i-1];
	}
	console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
