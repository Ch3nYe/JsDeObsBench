function Main(input) {
	input = input.split("\n");
	var n = input[0];
	var s = "No";
	if(n[1]==n[2]){
	    if(n[0]==n[1]||n[2]==n[3])s = "Yes";
	}
	console.log('%s',s);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));