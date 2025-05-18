function Main(input) {
	var data = input.split("\n")
	var n = data[0]
	var a = data.slice(1)
	
	for (var i = 0; i < n; ++i) {
		var b = []
		for (var j = 0; j < a.length; j += 2) {
			if (a[j] > a[j + 1]) {
				b.push(a[j] - a[j + 1])
			} else if (a[j] == a[j + 1]) {
				b.push(a[j])
			} else {
				b.push(a[j + 1] - a[j])
			}
		}
		a = b
	}
	
	console.log(a[0])
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
