function Main(input) {
	var lines = input.split("\n");
	var titles = lines.map(l => l.split(' ')[0]).splice(1, lines.length - 2)
	var sleptAt = titles.indexOf(lines[lines.length - 1])
	var sum = 0
	for(var i = sleptAt + 2; i < lines.length - 1 ; i ++) {
		sum+= Number(lines[i].split(' ')[1])
	}
	console.log(sum)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));