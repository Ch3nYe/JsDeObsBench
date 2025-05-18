function Main(input){
	input = input.split("\n");
	var n = Number(input[0]);
	var ans = 0;
	for(var i=Math.min(input[1].length,input[2].length);i!=0;i--){
		if(input[1].substr(-1*i)==input[2].substr(0,i)&&input[1].length+input[2].length-i>=n){
			ans = i;
			break;
		}
	}
	console.log((input[1].substr(0,input[1].length-ans)+input[2]).length);
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());