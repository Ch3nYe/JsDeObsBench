// inputに入力データ全体が入る
function Main(input) {
	input = input.split(" ");
	tmp = input[1][0];
	console.log("A" + tmp + "C");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));