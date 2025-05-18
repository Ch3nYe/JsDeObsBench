function Main(input) {
	var data = input.split(/\a\n|\a|\n/).map(function(s) { return parseInt(s); });
	var x = [ [data[0], data[1], 0],
				[0, data[2], 0],
				[0, 0, 0] ]
	var sum = 3 * x[1][1]
	x[0][2] = sum - x[0][0] - x[0][1]
	x[2][1] = sum - x[0][1] - x[1][1]
	x[2][2] = sum - x[0][0] - x[1][1]
	x[2][0] = sum - x[2][1] - x[2][2]
	x[1][0] = sum - x[0][0] - x[2][0]
	x[1][2] = sum - x[0][2] - x[2][2]
	
	console.log(x[0][0] + " " + x[0][1] + " " + x[0][2])
	console.log(x[1][0] + " " + x[1][1] + " " + x[1][2])
	console.log(x[2][0] + " " + x[2][1] + " " + x[2][2])
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
