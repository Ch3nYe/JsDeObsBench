'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let H = Number(input[0].split(' '))
	let W = Number(input[1].split(' '))
	let N = Number(input[2].split(' '))
	let paintedRow = 0
	let paintedColumn = 0
	let paintedCell = 0
	while(1) {
		if(W >= H) {
			paintedCell += W - paintedColumn
			paintedRow++
		} else {
			paintedCell += H - paintedRow
			paintedColumn++
		}
		if(paintedCell >= N) break
	}
	console.log(paintedColumn + paintedRow)
}   
main(require('fs').readFileSync('/dev/stdin', 'utf8'));