function Main(input) {
	input = input.split("");
	input.splice(4,0," ");
	console.log(input.join(""))
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());