// inputに入力データ全体が入る
function Main(input) {
	input = input.split('\n');
	var num = input[0];
	var character = input[1];
	var max = 0;
	var x = 0;
	for(var i = 0; i < character.length; i++){
	    if(character[i] === 'I'){
	        x++;
	    } else {
	        x--;
	    }
	    if(max < x){
	        max = x;
	    }
	}
	console.log(max);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));