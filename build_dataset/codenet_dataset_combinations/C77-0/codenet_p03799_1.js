function Main (input) {
	var inputArr = input.split(' ');
	var sNum = Number(inputArr[0]);
	var cNum = Number(inputArr[1]);
	var result = 0;
	// Sを使う組み合わせ
	if (sNum > (cNum/2)) {
		result += Math.floor(cNum/2);
	} else {
		result += sNum;
		cNum -= result * 2;
		result += Math.floor(cNum/4)
	}
	console.log(result);
}
// Main("12345 678901");
Main(require("fs").readFileSync("/dev/stdin", "utf8"));