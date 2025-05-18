function Main(input) {
    const args = input.split(' ');
    const H = parseInt(args[0], 10);
    const A = parseInt(args[1], 10);
    const ans = Math.ceil(H/A)
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

