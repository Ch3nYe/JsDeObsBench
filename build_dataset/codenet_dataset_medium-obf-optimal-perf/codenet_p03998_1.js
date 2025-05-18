// inputに入力データ全体が入る
function Main(input) {
	var input = input.split("\n");
	var answer;

	// input = input.map((x) => parseInt(x, 10));

	var hands = {
		a: input[0].split(''),
		b: input[1].split(''),
		c: input[2].split(''),
	};

	var currentPlayer = 'a';

	while (true) {
		currentCard = hands[currentPlayer].shift();

		if (currentCard) {
			currentPlayer = currentCard;
		} else {
			answer = currentPlayer.toUpperCase();
			break;
		}
	}


	// 出力
	console.log(answer);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
