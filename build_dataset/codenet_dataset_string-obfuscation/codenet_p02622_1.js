function Main(input) {
	input = input.split("\n");
	t = input[0].split("");
	s = input[1].split("");
	
	var result = 0
	for (var i = 0; i < s.length; i++) {
	if  (s[i] != t[i]) {
	result = result + 1;
	} else {
	}
	}
	
	console.log(result);
	}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));