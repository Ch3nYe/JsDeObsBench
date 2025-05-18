function Main(input) {
	input = input.trim().split("\n").map(function(x) { return x.split(" ")});
	let M = parseInt(input[0][0], 10);
	let ans = -1;
	let tmp = 0;
	for (let i = 0; i < M; i++){
		ans += parseInt(input[i + 1][1],10);
		tmp += parseInt(input[i + 1][0],10) * parseInt(input[i + 1][1],10);
	}
	ans += Math.floor((tmp - 1) / 9);
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));


