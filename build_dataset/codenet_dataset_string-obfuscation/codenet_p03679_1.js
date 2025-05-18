'use strict'

const main = (INPUT) => {
  const input = INPUT.split('\n')[0]
  const [X, A, B] = input.split(' ').map(n => Number(n))
  if (A - B >= 0) {
    console.log('delicious')
  } else if (A - B < 0 && Math.abs(A - B) <= X) {
    console.log('safe')
  } else {
    console.log('dangerous')
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
