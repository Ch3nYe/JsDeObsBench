'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let a = input[0].split('')
	let b = input[1].split('')
	let c = input[2].split('')
	
	function shiftCard(man) {
		let out = eval(man).shift()
		if(out === undefined) {
			console.log(man.toUpperCase())
			return
		}
		shiftCard(out)
	}
	shiftCard('a')

}   
main(require('fs').readFileSync('/dev/stdin', 'utf8'));