// inputに入力データ全体が入る
function Main(input) {
	var line = input.split("\n");
	var tmp = line[0].split(" ");
	var N = Number(tmp[0]);
	var M = Number(tmp[1]);
	var L = [];
	var R = [];
	var D = [];
	for(var i = 1; i <= M; i++){
		var tmp = line[i].split(" ");
		L.push(Number(tmp[0]));
		R.push(Number(tmp[1]));
		D.push(Number(tmp[2]));
	}
	var pos = [];
	var ans;
	loopj : for(var j = 0; j < M; j++){
		if(j === 0) pos[L[j]-1] = 1;
		var rightpos = pos[L[j]-1] + D[j];
		if(!pos[R[j]-1]){
			pos[R[j]-1] = rightpos;
		} else{
			if(pos[R[j]-1] !== rightpos){
				ans = 'No';
				break loopj;
			}
		}
	}

	if(!ans) ans = 'Yes';

	console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));