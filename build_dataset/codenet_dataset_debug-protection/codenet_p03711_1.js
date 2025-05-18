'use strict'

const main = input => {
	const args = input.split('\n').map(arg => arg.split(' '))
	const x = parseInt(args[0][0], 10)
	const y = parseInt(args[0][1], 10)
	const group1 = [1, 3, 5, 7, 8, 10, 12]
	const group2 = [4, 6, 9, 11]

	if (group1.includes(x) && group1.includes(y)) console.log('Yes')
	else if (group2.includes(x) && group2.includes(y)) console.log('Yes')
	else console.log('No')
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
