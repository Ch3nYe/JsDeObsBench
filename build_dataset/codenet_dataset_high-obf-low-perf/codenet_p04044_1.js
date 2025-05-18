function Main(input) {
	var lines = input.split("\n");
	var s = lines.splice(1, lines.length)
	var s_sorted = s.sort((a, b) => a > b ? 1 : -1)
	console.log(s_sorted.join(''))
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));