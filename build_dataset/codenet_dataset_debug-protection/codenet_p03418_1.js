// inputに入力データ全体が入る
function Main(input) {
	var line = input.split("\n");
	var tmp = line[0].split(" ");
	var maxint = Number(tmp[0]);
	var minrest = Number(tmp[1]);
	var ans = 0;
	for(var a = minrest || 1; a <= maxint; a++){
		for(var b = minrest || 1; b <= maxint; b++){
			if(a < b){
				ans++;
			} else{
				if(a%b >= minrest) ans++;
			}
		}
	}
	console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));