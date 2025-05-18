function main(arg) {
	arg = arg.split("\n")[0].split(" ")
	var N = Number(arg[0])
	var K = Number(arg[1])
	var count = 0
	for (var i = 1; i <= N; i+=2 ) {
		count++
	}
	if (K > count) {
		console.log("NO")
	} else {
		console.log("YES")
	}
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));