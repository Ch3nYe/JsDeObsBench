
function Main(input) {
	input = input.trim().split("\n").map(function(x) { return x.split(" ")});
	var N = parseInt(input[0][0], 10);
	var x = parseInt(input[0][1], 10);
	var vec_a = input[1].map(e => parseInt(e, 10));
	var sum  = function(arr) {
		var sum = 0;
		arr.forEach(function(elm) {
			sum += elm;
		});
		return sum;
	};
	var vec_b = [];
	var tmp = 0;
	for (var i = 0; i < N; i++){
		if (vec_a[i] >= (x - tmp)) vec_b.push(x - tmp);
		else vec_b.push(vec_a[i]);
		tmp = vec_b[i];
	}
	console.log(sum(vec_a) - sum(vec_b));
}


Main(require("fs").readFileSync("/dev/stdin", "utf8")); 