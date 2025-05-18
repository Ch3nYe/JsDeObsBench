function Main(s) {
	s = s.split(" ").map(a => parseInt(a));
	
	console.log(s[0] + s[1] >= s[2] ? "Yes" : "No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());