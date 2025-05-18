'use strict'

const fact = (n) => {
  if (n === 1) 1
  return n + fact(n - 1)
}

function Main(input) {
  input = input.trim().split('\n')
  const array = input[0].split(' ').map(s => parseInt(s))
  const N = array[0]
  const K = array[1]

  let A = input[1].split(' ').map(s => parseInt(s))

  let dp = {}
  // 各値の期待値を計算する
  for(let i = 0; i < N; ++i) {
    const a = A[i]
    if (dp[a]) continue

    let tmp = 0
    for(let j = a; j > 0; --j) {
      tmp += j
    }
    dp[a] = tmp
  }

  let result = 0

  // 前から順番に組み合わせる
  for (let i = 0; i < N - (K - 1); ++i) {

    let total = 0
    for(let j = i; j < i + K; ++j) {
      total += dp[A[j]] * 1/A[j]
    }

    result = Math.max(total, result)
  }

  console.log(result.toFixed(12))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));