// inputに入力データ全体が入る
function Main(input) {
	input = input.split("\n")[0].split(" "); // 1行目がinput[0], 2行目がinput[1], …に入る
    
    if( Math.abs(input[0] - input[1]) < Math.abs(input[0] - input[2]))
        console.log("A");
    else
        console.log("B");
}
 
// ※この行以降は編集しない (標準入力から一度に読み込みMainを呼び出します)
Main(require("fs").readFileSync("/dev/stdin", "utf8"));


