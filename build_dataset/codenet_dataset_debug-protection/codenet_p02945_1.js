'use strict'

const main = input => {
	const args = input.split('\n').map(arg => arg.split(' '))
	const A = parseInt(args[0][0], 10)
	const B = parseInt(args[0][1], 10)
	console.log(Math.max(A + B, A - B, A * B) + 0)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
