// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split(" ");
	const S = parseInt(input[0]);
  const W = parseInt(input[1]);

  const ret = (S <= W)? 'unsafe' : 'safe';
  console.log(ret);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));