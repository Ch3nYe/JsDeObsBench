'use strict'

const main = input => {
	const args = input.split('\n').map(arg => arg.split(' '))
	const S = args[0][0]
	const N = S.length
	let odd = true
	let even = true

	for (let i = 0; i < N; i++) {
		if (i % 2 === 0) {
			if (!['R', 'U', 'D'].includes(S[i])) odd = false
		} else {
			if (!['L', 'U', 'D'].includes(S[i])) even = false
		}
	}

	if (odd && even) console.log('Yes')
	else console.log('No')
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
