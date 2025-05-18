//TLEか？
function Main(input) {
	input = input.trim().split("\n").map(function(x) { return x.split(" ")});    
	var N = parseInt(input[0][0], 10);
	var T = parseInt(input[0][1], 10);
	var arr_AB = [];
	for (var i = 0; i < N; i++){
		arr_AB.push(input[i + 1].map(e => parseInt(e, 10)));
	}
	arr_AB.sort((a, b) => a[0] - b[0]);
	var dp = [];
	var Ai, Bi;
	dp.push(Array.from({length: T}, () => [0, 0]));
	for (var i = 0; i < N; i++){
		dp.push([]);
		Ai = arr_AB[i][0];
		Bi = arr_AB[i][1];
		for (var j = 0; j < T; j++){
			dp[i + 1].push([0, 0])
			// console.log(i, j, dp);
			if (Ai <= j){
				dp[i + 1][j][0] = Math.max(dp[i][j][0], dp[i][j - Ai][0] + Bi);
			} else {
				dp[i + 1][j][0] = dp[i][j][0];
			}
			dp[i + 1][j][1] = Math.max(dp[i][j][1], dp[i][j][0] + Bi);
		}
		
	}
	console.log(dp[N][T - 1][1]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
