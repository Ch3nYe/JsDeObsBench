const main = (input) => {
  const mod = (10**9 + 7)
  const s = Number(input.trim())

  const dp = [1, ...new Array(s).fill(0)]

  for (let x=3; x<dp.length; x++) {
    let sum = 0

    for (let i=x-3; i>=0; i--) {
      sum = (sum + dp[i]) % mod
    }

    dp[x] = sum
  }

  return console.log((dp[s] % mod + mod) % mod)
}

process.env.MYTEST
  ? (process.env.MYTEST === 'test' ? test() : main(require('fs').readFileSync('dev/stdin', 'utf8')))
  : main(require('fs').readFileSync('/dev/stdin', 'utf8'))