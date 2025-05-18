function Main(input) {
	input = input.split("\n");
	var M = input[0].split(" ").map(a => parseInt(a));
	var N = M[0];
	M = M[1];
	var L = [];
	for(var i = 0; i < M; i++){
		L[i] = input[i+1].split(" ").map(a => parseInt(a));
	}
	var anc = new Array(N+1).fill(0);
	var x = new Array(N+1).fill(0);
	anc[0] = anc[1] = 1;
	var i, j, low = 1;
	var ans = "Yes";
	
	top:
	while(L.length){
		i = j = L.length;
		while(i--){
			if(anc[L[i][0]] && anc[L[i][1]]){
				if(x[L[i][1]] - x[L[i][0]] !== L[i][2]){
					ans = "No";
					break top;
				}else{
					L.splice(i, 1);
					continue;
				}
			}
			if(anc[L[i][0]]){
				anc[L[i][1]] = 1;
				x[L[i][1]] = x[L[i][0]] + L[i][2];
				L.splice(i, 1);
			}else if(anc[L[i][1]]){
				anc[L[i][0]] = 1;
				x[L[i][0]] = x[L[i][1]] - L[i][2];
				L.splice(i, 1);
			}
		}
		if(j === L.length){
			i = anc.findIndex(a => a === 0);
			anc[i] = 1;
		}
	}
	
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));