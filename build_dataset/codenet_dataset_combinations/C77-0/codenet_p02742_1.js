'use strict'

const Main = (input) => {
  const tmp = input.trim().split(' ')
  const H = parseInt(tmp[0])
  const W = parseInt(tmp[1])

  let result = 0

  if ((H % 2) != 0 && (W % 2) != 0) {
    result = Math.ceil(H * W / 2)
  } else {
    result = H * W / 2
  }

  console.log(result)
  return result
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))