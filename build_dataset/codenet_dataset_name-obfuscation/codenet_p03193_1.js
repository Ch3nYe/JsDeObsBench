function Main(input) {
	input = input.split("\n");
	var mem = input[0].split(" ").map(Number);
	var sum = 0;
	for(var i=1;i<input.length;i++){
		var n = input[i].split(" ").map(Number);
		if(n[0]>=mem[1]&&n[1]>=mem[2]) sum++;
	}
	console.log(sum)
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());