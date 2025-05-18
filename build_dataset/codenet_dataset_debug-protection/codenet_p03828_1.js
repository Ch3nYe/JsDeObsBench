'use strict'

const pf = (n, res) => {
  for (let i = 2; i <= n; i++) {
    while(n % i === 0) {
      n /= i;
      if (!(i in res)) res[i] = 0
      res[i]++
    }
  }
  return res
}

function main(input) {
  input = Number(input.trim())
  const mod = 1e9 + 7
  let obj = {}
  let ans = 1

  for (let i = 1; i <= input; i++) {
    obj = pf(i, obj)
  }

  Object.keys(obj).forEach(n => {
    ans = ans * (obj[n] + 1) % mod
  })
  console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
