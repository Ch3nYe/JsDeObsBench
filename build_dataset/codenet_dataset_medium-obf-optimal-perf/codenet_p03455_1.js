'use strict'

function main(input) {
  input = input
    .trim()
    .split(' ')
    .map(Number)

  const A = input[0]
  const B = input[1]
  const ans = A % 2 ^ B % 2 ? 'Even' : 'Odd'
  console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
