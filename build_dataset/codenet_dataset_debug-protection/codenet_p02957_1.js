'use strict'

const main = input => {
	const args = input.split('\n').map(arg => arg.split(' '))
	const a = parseInt(args[0][0], 10)
	const b = parseInt(args[0][1], 10)
	const t1 = a + b
	const t2 = t1 / 2
	if (t2 % 1 === 0) console.log(t2)
	else console.log('IMPOSSIBLE')
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
