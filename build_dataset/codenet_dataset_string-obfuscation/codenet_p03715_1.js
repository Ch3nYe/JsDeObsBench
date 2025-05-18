function Main(input) {
	input = input.trim().split("\n").map(function(x) { return x.split(" ")});
	var H = parseInt(input[0][0], 10);
	var W = parseInt(input[0][1], 10);
	var ans = calc(H, W);
	console.log(ans);
}

function calc(H, W){
	if (H % 3 === 0 || W % 3 === 0) return 0;
	var result = H * W;
	var tmp;
	var oldtmp = result;
	for (var i = 0; i <= W; i++){
		tmp = Math.max(Math.abs(i * H - (W - i) * Math.ceil(H / 2)), Math.abs(i * H - (W - i) * Math.floor(H / 2)), (H % 2) * (W - i));
		result = Math.min(result, tmp);
		if (tmp > oldtmp) break;
		oldtmp = tmp;
	}
	[W, H] = [H, W];
	oldtmp =  H * W;
	for (var i = 0; i <= W; i++){
		tmp = Math.max(Math.abs(i * H - (W - i) * Math.ceil(H / 2)), Math.abs(i * H - (W - i) * Math.floor(H / 2)), (H % 2) * (W - i));
		result = Math.min(result, tmp);
		if (tmp > oldtmp) break;
		oldtmp = tmp;
	}
	return Math.min(result, H, W);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8")); 