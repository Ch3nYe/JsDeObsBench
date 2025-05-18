'use strict'

const main = input => {
	const args = input.split('\n').map(arg => arg.split(' '))
	const M = parseInt(args[0][0], 10)
	const D = parseInt(args[0][1], 10)
	let cnt = 0

	for (let m = 1; m <= M; m++) {
		for (let j = 1; j <= D; j++) {
			const d1 = j % 10
			const d10 = Math.floor(j / 10)

			if (d1 >= 2 && d10 >= 2 && (d1 * d10 === m)) {
				cnt++
			}
		}
	}

	console.log(cnt)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
