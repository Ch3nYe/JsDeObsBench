function Main(input) {
	input = input.split("\n");
	var N = input[0].split(" ").map(a => parseInt(a));
	var K = N[1];
	N = N[0];
	var x = [], y = [], c = [];
	for(var i = 0; i < N; i++){
		x[i] = input[i+1].split(" ");
		y[i] = parseInt(x[i][1]) % (K * 2);
		c[i] = (x[i][2] === "W" ? 0 : 1);
		x[i] = parseInt(x[i][0]) % (K * 2);
	}
	var ans = 0;
	for(i = 0; i < K; i++){
		var now = 0;
		var Y1 = new Array(K*2).fill(0), Y2 = new Array(K*2).fill(0);
		for(var k = 0; k < N; k++){
			if((((x[k] + i) / K ^ y[k] / K) & 1) === c[k]){
				now++;
				Y1[y[k]]++;
			}else Y2[y[k]]++;
		}
		if(ans < now)ans = now;
		if(ans < N - now)ans = N - now;
		for(var j = 0; j < K - 1; j++){
			now += Y2[j] - Y1[j] + Y2[j+K] - Y1[j+K];
			if(ans < now)ans = now;
			if(ans < N - now)ans = N - now;
		}
	}
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));