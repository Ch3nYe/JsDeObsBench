'use strict'

const main = input => {
	const args = input.split('\n').map(arg => arg.split(' '))
	const N = parseInt(args[0][0], 10)
	const p = args.slice(1, N + 1).map(arg => parseInt(arg[0], 10)).sort((a, b) => b - a)
	let sum = p[0] / 2

	for (let i = 1; i < N; i++) {
		sum += p[i]
	}

	console.log(sum)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
