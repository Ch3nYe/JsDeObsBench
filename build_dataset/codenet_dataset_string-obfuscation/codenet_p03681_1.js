'use strict'

function main(input) {
  input = input.split(' ').map(v => ~~v)
  const n = input[0]
  const m = input[1]

  const limit = 1e9 + 7 //(Math.pow(10, 9) + 7)

  //交互に並べられない
  if (Math.abs(n - m) >= 2) {
    console.log(0)
    return
  }

  let nn = 1
  for (let i = 2; i <= n; i++) {
    nn *= i
    if (nn >= limit) {
      nn = nn % limit
    }
  }
  // let mm = 1
  for (let i = 2; i <= m; i++) {
    nn *= i
    if (nn >= limit) {
      nn = nn % limit
    }
  }
  // console.log(nn,mm)

  let tmp = nn % limit
  // console.log(tmp)
  if (n == m) {
    tmp = 2 * tmp
  }
  const ans = tmp % limit

  console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))