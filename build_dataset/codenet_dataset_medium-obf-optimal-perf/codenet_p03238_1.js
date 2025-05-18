'use strict'

const main = input => {
	const args = input.trim().split('\n')
	const n = parseInt(args[0], 10)

	if (n === 1) {
		console.log('Hello World')
	} else {
		const a = parseInt(args[1], 10)
		const b = parseInt(args[2], 10)
		console.log(a + b)
	}
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
