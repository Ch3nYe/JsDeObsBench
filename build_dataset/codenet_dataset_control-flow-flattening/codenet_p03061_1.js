function gcd(arr) {
    var f = (a, b) => b ? f(b, a % b) : a
    var ans = arr[0]
    for (var i = 1; i < arr.length; i++) {
        ans = f(ans, arr[i]); 
    }
    return ans 
}

function getExcep(c) {
	var min = Math.min(...c)
	var max = Math.max(...c)
	var mincount = 0
	var maxcount = 0
	var findValue = 0
	for (var i = 0; i < c.length; i++) {
		if (c[i] === min) {
			mincount++
		}
	}
	if (mincount === 1) {
		findValue = min
	} else {
		findValue = max
	}
	// console.log(findValue)
	for (var i = 0; i < c.length; i++) {
		if (c[i] === findValue) {
			return i
		}
	}
}

function main(arg) {
	arg = arg.trim().split("\n")
	var N = Number(arg[0])
	var A = arg[1].split(" ").map(Number)
	var c = new Array(A.length).fill(0)
	var result = 0
	for (var i = 0; i < A.length;i ++) {
		var _A = A.slice()
		_A.splice(i, 1)
		var n = gcd(_A)
		c[i] = n
		// console.log(_A)
	}
	var idx = getExcep(c)
	A[idx] = A[idx+1]

	console.log(gcd(A))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));