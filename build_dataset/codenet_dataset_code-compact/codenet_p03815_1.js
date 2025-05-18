'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let x = Number(input[0].split(' ')[0])
	if(x % 11 > 6) {
		console.log(Math.floor(x / 11) * 2 + 2)
	} else if(x % 11 > 0) {
		console.log(Math.floor(x / 11) * 2 + 1)
	} else {
		console.log(Math.floor(x / 11) * 2)
	}
}   
main(require('fs').readFileSync('/dev/stdin', 'utf8'));