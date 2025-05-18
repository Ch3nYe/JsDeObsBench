function fillZero(l,num) {
	num = String(num)
	for (var i = num.length; i < l; i++) {
		num = "0" + num
	}
	return num
}

function main(arg) {
	arg = arg.trim().split("\n")
	arg[0] = arg[0].split(" ")
	var N = Number(arg[0][0])
	var M = Number(arg[0][1])

	arg.shift()

	var p_master = {}

	for (var i = 0; i < arg.length; i++) {
		var tmp = arg[i].split(" ").map(e => Number(e))
		arg[i] = tmp

		// p_mastre.push(tmp[0])
		if (!p_master[tmp[0]]) {
			p_master[tmp[0]] = []
		}
		p_master[tmp[0]].push(tmp[1])
	}

	for (key in p_master) {
		p_master[key].sort()
	}
	// console.log(JSON.stringify(p_master))

	for (var i = 0; i < arg.length; i++) {
		var _p = arg[i][0]

		var j = 0;
		for (var j = 0; j < p_master[_p].length; j++) {
			if (p_master[_p][j] === arg[i][1]) {
				break
			}
		}
		console.log(fillZero(6,_p) + fillZero(6, j+1))
	}
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));