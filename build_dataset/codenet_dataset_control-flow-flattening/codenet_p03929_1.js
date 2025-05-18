// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split(" ");
	//カレンダーの段数 n
	var valN = input[0];
	//正方形を置く時の条件となる数 k
	var valK = input[1];
	
	//値のチェック
	if(valN < 3){
		console.log("0");
		return;
	}
	
	var count = 0;
	//段数の数だけ繰り返す
	for(var i = 0;i+2<valN;i++){
		//行数の数だけ繰り返す
		for(var j = 0;j<5;j++){
			//条件チェック
			if((i*63 + j*9 + 81)%11 == valK){
				count++;
			}
		}
	}
	
	console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));