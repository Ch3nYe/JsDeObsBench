function Main(input) {
	input = input.split(" ").map(a => parseInt(a));
	var N = input[0];
	var M = input[1];
	var ans = 0;
	if(N === 1 && M === 1) ans = 1;
	else if(N === 1 || M === 1) ans = N + M - 3;
	else ans = (N - 2) * (M - 2);
	
	if(ans > 9e15){
		ans = Math.floor((N - 2) / 10000) * (M - 2);
		tmp = (N - 2) % 10000 * (M - 2);
		ans += Math.floor(tmp / 10000);
		tmp = ("0000" + tmp % 10000).slice(-4);
		ans += tmp;
	}
	
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));