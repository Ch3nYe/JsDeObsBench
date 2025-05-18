'use strict'

const mod = 1e9 + 7

function solve(N, K, A) {
  if (K === 0) {
    return 1
  }
  var dp = new Array(K+1).fill(0)
  var prefix = new Array(N).fill(0).map(e => new Array(K+1).fill(0))

  for (var i = N-1; i >= 0; i--) {
    for (var j = 0; j <= K; j++) {
      if (i === (N-1)) {
        dp[j] = j <= A[i] ? 1 : 0
        prefix[i][j] = (j - 1) >= 0 ? (prefix[i][j-1] % mod) + (dp[j] % mod) : dp[j] % mod
      } else {
        dp[j] = j <= A[i] ? prefix[i+1][j] % mod : (prefix[i+1][j] % mod) - (prefix[i+1][j - A[i] - 1] % mod)
        prefix[i][j] = (j - 1) >= 0 ? (prefix[i][j-1] % mod) + (dp[j] % mod) : dp[j] % mod
      }
    }
  }
  return dp[K] % mod
}

function main(input) {
  var lines = input.split("\n")
  var NK = lines[0].split(' ').map(l => parseInt(l))
  var N = NK[0]
  var K = NK[1]
  var A = lines[1].split(' ').map(l => parseInt(l))
  var ans = solve(N, K, A)
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));