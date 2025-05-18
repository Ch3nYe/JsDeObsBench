function Main(input) {
	input = input.trim().split("\n").map(function(x) { return x.split(" ")});
	var N = parseInt(input[0][0], 10);
	var vec_A = input[1].map(e => parseInt(e, 10));
	var vec_B = input[2].map(e => parseInt(e, 10));
	var vec_C = input[3].map(e => parseInt(e, 10));
	function compareFunc(a, b) {
		return b - a;
	}
	vec_A.sort(compareFunc);
	vec_B.sort(compareFunc);
	vec_C.sort(compareFunc);

	var s = 0;
	var t = -1;
	var vec_sumB = Array.from({length: N}, () => 0);
	var tmpAdj = 0;  
	var ans = 0;
	for (var i = 0; i < N; i++){
		while (s < N && vec_B[s] > vec_A[i]){
			while (t < (N - 1) && vec_C[t + 1] > vec_B[s]){
				t ++;
			}
			if (s > 0) tmpAdj = vec_sumB[s - 1];
			else tmpAdj = 0;
			vec_sumB[s] = tmpAdj + t + 1;
			s ++;        
		}
		s = Math.max(0, s - 1);
		ans += vec_sumB[s];
	}	
	console.log(ans);
}
  
Main(require("fs").readFileSync("/dev/stdin", "utf8")); 