function Main(input) {
	input = input.split("\n");
	var H = input[0].split(" ").map(a => parseInt(a));
	var W = H[1];
	var D = H[2];
	H = H[0];
	var A;
	var x = new Array(H*W+1).fill(0).map(a => new Array(2));
	for(var i = 0; i < H; i++){
		A = input[i+1].split(" ").map(a => parseInt(a));
		for(var j = 0; j < W; j++){
			x[A[j]][0] = i;
			x[A[j]][1] = j;
		}
	}
	var y = new Array(H*W+1).fill(0);
	for(i = D+1; i <= H*W; i++){
		y[i] = y [i-D] + Math.abs(x[i-D][0] - x[i][0]) + Math.abs(x[i-D][1] - x[i][1]);
	}
	
	var Q = parseInt(input[H+1]);
	var ans = new Array(Q).fill(0);
	for(i = 0; i < Q; i++){
		var L = input[H+2+i].split(" ").map(a => parseInt(a));
		var R = L[1];
		L = L[0];
		ans[i] = y[R] - y[L];
	}
	
	console.log(ans.join("\n"));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));