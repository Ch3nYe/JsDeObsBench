function Main(input){
	var max = 0;
	var ans = 0;
	input = input.split("\n");
	for(var i=1;i<input.length;i++){
		var mem = input[i].split(" ").map(Number);
		if(max<mem[0]){
			max = mem[0];
			ans = mem[0]+mem[1];
		}
	}
	console.log(ans)
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());