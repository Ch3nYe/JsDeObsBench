'use strict'

const Main = (input) => {
  const tmp = input.trim().split('\n')
  const N = parseInt(tmp[0].split(' ')[0])
  const A = parseInt(tmp[0].split(' ')[1])
  const B = parseInt(tmp[0].split(' ')[2])
  const S = tmp[1]
  //a 国内
  //b 海外
  //c どちらでもない

  let result = []
  let count = 0
  let overseas = 0

  for (let i = 0; i < N; i++) {
    const participant = S.split('')[i]
    if (participant === 'a') {
      if (count < (A + B)) {
        result.push('Yes')
        count += 1
      } else {
        result.push('No')
      }
    } else if (participant === 'b') {
      if (count < (A + B) && overseas < B) {
        result.push('Yes')
        count += 1
        overseas += 1
      } else {
        result.push('No')
      }
    } else {
      result.push('No')
    }
  }
  result = result.join('\n')

  console.log(result)
  return result
}


Main(require('fs').readFileSync('/dev/stdin', 'utf8'))