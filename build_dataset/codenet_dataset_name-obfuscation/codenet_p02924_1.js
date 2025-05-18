// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    var n = parseInt(input[0], 10);
    var count = 0;
    if (n != 1) {
        for (var i = 1; i < n; i++ ) {
            count += i % (i + 1);
        }
    }
    //出力
    console.log('%s',count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));