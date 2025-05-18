'use strict'

const main = input => {
	const args = input.trim().split(' ')
	const a = parseInt(args[0], 10)
	const b = parseInt(args[1], 10)
	const c = parseInt(args[2], 10)
	if (c >= a && c <= b) console.log('Yes')
	else console.log('No')
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
