// inputに入力データ全体が入る
function Main(input) {
	ans = 'No'
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.trim().split("\n");
	rotate = input[0]
	// s = input[0].split(' ').map((n) => (parseInt(n)))
	for (i = 0; i <= input[0].length; i++) {
		head = rotate.substr(0,1)
		str = rotate.slice(1) + head

		if (input[1] === str) {
			ans = 'Yes'
			break
		}
		rotate = str
	}

	// sort
	// s.sort()
	// s.sort((a, b) => { return b - a})



	//出力
	console.log(ans)
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main(require('fs').readFileSync('./input.txt', 'utf-8'));