
function Main(input) {
	input = input.trim().split("\n").map(function(x) { return x.split(" ")});    
	let C = 1e9 + 7;
	let H = parseInt(input[0][0], 10);
	let W = parseInt(input[0][1], 10);
	let DP = [];
	for (let i = 0; i < H; i++){
		DP.push(Array.from({length: W}, () => 0));
	}
	DP[0][0] = 1;
	for (let i = 1; i < H + W - 1; i ++){
		for (let j = 0; j <= Math.min(i, H - 1); j++){
			// console.log(i, j);
			if (input[j + 1][0][i - j] === '#' || i - j >= W) continue;
			if (j > 0 && i - j > 0) {
				DP[j][i - j] = (DP[j - 1][i - j] + DP[j][i - j - 1]) % C;
			} else if (j > 0){
				DP[j][i - j] = DP[j - 1][i - j];
			} else {
				DP[j][i - j] = DP[j][i - j - 1];
			}
			// console.log(DP);
		}
	}
	// console.log(DP);
	console.log(DP.pop().pop());
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));