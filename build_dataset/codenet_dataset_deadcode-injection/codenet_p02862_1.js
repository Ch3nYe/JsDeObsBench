'use strict'

const ncr = (n, r, mod) => {
  mod = mod || 1e9+7
  const a = Math.max(n, r)
  const b = Math.min(n, r)
  const p = Math.min(b, a-b)
  const nu = new Array(p + 1)
  const de = new Array(p + 1)
  let dest = 1
  if (p > 0) {
    for (let i = 1; i <= p; i++) {
      nu[i] = a - p + i 
      de[i] = i
    }
    for (let k = 2; k <= p; k++) {
      const piv = de[k]
      const j = (piv > 1) ? -((a - p) % k) : 0
      for (let i = k; i <= p; i += k) {
        nu[i + j] /= piv; de[i] /= piv
      }
    }
    for (let i = 1; i <= p; i++) {
      if (nu[i] > 1) dest = dest * nu[i] % mod
    }
  }
  return dest
}

function main(inp) {
  inp = inp.trim().split(' ');
  const x = Number(inp[0])
  const y = Number(inp[1])

  let sum = 0
  for (let i = Math.floor(x / 2); i >= 0; i--) {
    const a = x - i * 2
    if (a * 2 + i === y) {
      sum = ncr(i+a, i)
    }
  }
  
  console.log(sum)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
