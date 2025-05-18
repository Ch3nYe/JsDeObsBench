function Main(input) {
	input = input.split("\n").map(Number)
	console.log((input[0]+1-input[1])*(input[0]+1-input[2]));
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());